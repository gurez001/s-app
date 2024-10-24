import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import Card from "../../common/site-card/Card";

import { useDispatch, useSelector } from "react-redux";
import { get_all_website } from "../../../api/webapi";
import Loader from "../../common/loader/Loader";
import useFooter from "../../../hooks/useFooter";
import useRefresh from "../../../hooks/useRefresh";
import usePagination from "../../../hooks/usePagination";

const Home = () => {
  const dispatch = useDispatch();
  const { web, loading, resultPerpage } = useSelector((state) => state.web);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    dispatch(get_all_website(page));
  }, [dispatch, page]);

  const renderItem = ({ item }) => <Card item={item} />;
  const loadMore = () => {
    if (!loading && web.length > 0) {
      if (!loading && web.length % resultPerpage === 0) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const refreshList = () => {
    setRefreshing(true); // Start the refreshing state
    setPage(1); // Reset page to 1
    dispatch(get_all_website(1, true)) // Fetch the first page with refresh flag
      .finally(() => setRefreshing(false)); // Stop the refreshing state after fetch
  };
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  if (loading && page === 1) {
    return <Loader />;
  }
  return (
    <View style={{ flex: 1 }} className="my-20">
      <FlatList
        data={web}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={loadMore} // Delegate to usePagination
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter} // Use the hook's Footer component
        refreshing={refreshing} // Corrected: boolean value
        onRefresh={refreshList} // Corrected: the function to refresh
      />
    </View>
  );
};

export default Home;
