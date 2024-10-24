import { FontAwesome } from "@expo/vector-icons";
import React, { memo } from "react";
import { FormatDate } from "../../../lib/Date_formet";
import * as Animatable from "react-native-animatable"; // For animation
import { Linking, Text, TouchableOpacity, View } from "react-native";

const Whatsapp_card = ({ item }) => {
  const handlePress = (link) => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity onPress={() => handlePress(item.link)} className="my-1">
      <View className="flex-1 flex-row items-center px-4 py-3 rounded-full shadow-2xl bg-white">
        <View className="mr-4 bg-green-500 rounded-full px-2 py-1">
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            duration={1000}
          >
            <FontAwesome name="whatsapp" size={42} color="#fff" />
          </Animatable.View>
        </View>

        <View className="flex-1">
          <Text className="text-black font-bold">Joining Date</Text>
          <FormatDate time={item.create_at} />
        </View>

        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          duration={1000}
          className="ml-4"
        >
          <FontAwesome name="circle" size={24} color="green" />
        </Animatable.View>
      </View>
    </TouchableOpacity>
  );
};
const isMemoize = (prev, next) => {
  return prev.item._id !== next.item._id;
};

export default memo(Whatsapp_card, isMemoize);
