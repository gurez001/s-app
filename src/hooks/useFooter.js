import { useMemo } from "react";
import { View, ActivityIndicator } from "react-native";

const useFooter = (loadingMore) => {
  // Memoize the footer component to avoid unnecessary re-renders
  const Footer = useMemo(() => {
    return loadingMore ? (
      <View style={{ padding: 20 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  }, [loadingMore]);

  return Footer;
};

export default useFooter;
