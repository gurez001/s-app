import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Card from "../../common/site-card/Card";

import { useDispatch, useSelector } from "react-redux";
import { get_all_website } from "../../../api/webapi";
import Loader from "../../common/loader/Loader";
import useFooter from "../../../hooks/useFooter";
import useRefresh from "../../../hooks/useRefresh";
import usePagination from "../../../hooks/usePagination";
import Offer_card from "../../common/site-card/Offer_card";
import { get_all_offer } from "../../../api/offersapi";
import OfferSlider from "../../common/slider/OfferSlider";

const Offer_list = () => {
  const dispatch = useDispatch();
  const { offer_data } = useSelector((state) => state.offers);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  // Pagination state

  const { page, loadMoreData, loadingMore, setPage, setHasMore } =
    usePagination(get_all_offer);
  const { onRefresh, refreshing } = useRefresh(
    setPage,
    setHasMore,
    get_all_offer
  );

  const Footer = useFooter(loadingMore);

  useEffect(() => {
    if (isFirstLoad) {
      dispatch(get_all_offer(page)).finally(() => setIsFirstLoad(false)); // Set isFirstLoad to false after data is loaded
    }
  }, [dispatch, page, isFirstLoad]);

  const renderItem = ({ item }) => {
    return <Offer_card item={item} />;
  };
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

  if (isFirstLoad) {
    return <Loader />; // Show loader only on initial load
  }

  return (
    <FlatList
      data={offer_data}
      className="my-20"
      ListHeaderComponent={headerContent}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={Footer}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.9}
      refreshing={refreshing}
      onRefresh={onRefresh}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default Offer_list;
