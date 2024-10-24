import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
const CustomHeaderButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.button}
    >
      <Ionicons
        name="settings"
        size={32}
        color="#2ac5ff"
        className="bg-white rounded-full"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 24, // Customize the size of the icon
  },
});

export default CustomHeaderButton;
