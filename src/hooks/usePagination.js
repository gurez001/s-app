import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const usePagination = (fetchFunction) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = useCallback(async () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true); // Set loadingMore to true when loading starts
      const nextPage = page + 1;
      try {
        const result = await dispatch(fetchFunction(nextPage, false)); // Fetch next page of data
        if (result.web_data && result.web_data.length > 0) {
          setPage(nextPage);
        } else {
          setHasMore(false); // No more data to load
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoadingMore(false); // Set loadingMore to false when loading ends
    }
  }, [loadingMore, hasMore, page, dispatch, fetchFunction]); // Use fetchFunction instead of fetchMoreData

  return { page, loadMoreData, hasMore, loadingMore, setPage, setHasMore };
};

export default usePagination;
