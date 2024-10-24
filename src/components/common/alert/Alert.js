// import { FETCH_USER_ERROR } from "@/store/redux/constants/user_actionTypes";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FETCH_USER_ERROR } from "../../../store/redux/constants/user_actionTypes";
import { useDispatch } from "react-redux";
export const Alert_ = ({ type, msg }) => {
  const dispatch = useDispatch();
  const showAlert = () => {
    Alert.alert(
      "Alert Title", // Title of the alert
      "This is the alert message", // Message of the alert
      [
        {
          text: "Cancel", // Button text
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel", // Button style
        },
        {
          text: "OK", // Button text
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false } // Whether the alert can be dismissed by tapping outside
    );
  };

  const handlePress = () => {
    dispatch({ type: FETCH_USER_ERROR });
  };
  return (
    <View className="relative">
      {type === "error" ? (
        <>
          <Text className="text-center text-red-700 text-gray-50 bg-red-500 py-2 rounded-lg border border-slate-300">
            {msg}
          </Text>
        </>
      ) : null}
      <View className="absolute right-1 top-1 ">
        <TouchableOpacity
          onPress={handlePress} // Add your click handler here
        >
          <AntDesign name="closecircle" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
