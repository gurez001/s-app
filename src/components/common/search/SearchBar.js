import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View className="w-full flex-1 flex-row mt-2">
      <TextInput
        className="w-full bg-white px-4 h-10 rounded-full border-white border"
        placeholder="Search..."
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

export default SearchBar;
