import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { get_branch_details } from "../../../api/branchapi";
import Loader from "../../common/loader/Loader";
import Whatsapp_card from "../../common/site-card/Whatsapp_card";

const Branch = () => {
  const dispatch = useDispatch();
  const { loading, branch, resultPerpage } = useSelector(
    (state) => state.branch
  );
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    dispatch(get_branch_details(page));
  }, [dispatch, page]);

  const renderItem = ({ item }) => <Whatsapp_card item={item} />;
  const loadMore = () => {
    if(!loading && branch && branch.length>0){

      if (!loading && branch?.length % resultPerpage === 0) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const refreshList = () => {
    setRefreshing(true);
    setPage(1);
    dispatch(get_branch_details(1, true)).finally(() => setRefreshing(false));
  };

  if (loading && page === 1) {
    return <Loader />;
  }
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };
  const headerContent = (
    <View className="mb-3">
      <Text className="text-2xl text-center font-medium">My Branch</Text>
    </View>
  );

  return (
    <View className="p-3 my-20">
      <FlatList
        data={branch}
        ListHeaderComponent={headerContent}
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

export default Branch;
