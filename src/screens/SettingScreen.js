import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Setting from "../components/pages/setting/Setting";

const SettingScreen = () => {
  return <Setting />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingScreen;
