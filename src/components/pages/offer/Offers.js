import React, { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
  FlatList,
} from "react-native";
import OfferSlider from "../../common/slider/OfferSlider";
import useRefresh from "../../common/refresh/useRefresh";
import Offer_card from "../../common/site-card/Offer_card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_all_offer } from "../../../api/offersapi";
import Loader from "../../common/loader/Loader";

const Offers = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const { loading, offer_data, resultPerpage } = useSelector(
    (state) => state.offers
  );
  useEffect(() => {
    dispatch(get_all_offer(page));
  }, [dispatch, page]);

  const renderItem = ({ item }) => <Offer_card item={item} />;
  const loadMore = () => {
    if (!loading && offer_data.length > 0) {
      if (!loading && offer_data.length % resultPerpage === 0) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const refreshList = () => {
    setRefreshing(true); // Start the refreshing state
    setPage(1); // Reset page to 1
    dispatch(get_all_offer(1, true)) // Fetch the first page with refresh flag
      .finally(() => setRefreshing(false)); // Stop the refreshing state after fetch
  };
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  if (loading && page === 1) {
    return <Loader />;
  }

  const headerContent = (
    <View>
      <View>
        <Text className="text-center text-3xl">Best Offers</Text>
        <Text className="text-center text-sm">
          Check out out top-rated tours
        </Text>
      </View>
      <View className="mt-5">
        <OfferSlider />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }} className="my-20">
      <FlatList
        ListHeaderComponent={headerContent}
        data={offer_data}
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

export default Offers;
