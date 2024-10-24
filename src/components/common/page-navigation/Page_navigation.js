import React, { useState, useRef, useCallback } from "react";

const Page_navigation = () => {
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false); // <-- Declare loadingMore state
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = async () => {
    console.log("dd");
    if (!loadingMore && hasMore) {
      console.log("jj");

      setLoadingMore(true); // Set loadingMore to true when loading starts
      const nextPage = page + 1;
      await dispatch(get_all_website(nextPage)); // Fetch next page of data
      if (result.payload.length > 0) {
        setPage(nextPage);
      } else {
        setHasMore(false); // No more data to load
      }
      setLoadingMore(false); // Set loadingMore to false when loading ends
    }
  };

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 400;

    if (isCloseToBottom && !loadingMore) {
      loadMoreData();
    }
  };
};

export default Page_navigation;
