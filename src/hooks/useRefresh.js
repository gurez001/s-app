import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const useRefresh = (setPage, setHasMore, fetchFunction) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const newPage = 1;
      setPage(newPage);
      setHasMore(true);
      await dispatch(fetchFunction(newPage, true)); // Pass `true` for refreshing
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setRefreshing(false);
    }
  }, [dispatch, fetchFunction]);

  return { onRefresh, refreshing };
};

export default useRefresh;
