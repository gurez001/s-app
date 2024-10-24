import React, { memo } from "react";
import { Text, View, Image } from "react-native";
import { getSiteURL } from "../../../lib/get-site-url";
import {TimeAndDate} from "../../../lib/Date_formet";

const baseurl = getSiteURL();
const Offer_card = ({ item }) => {
  return (
    <View className="p-4 mt-2 bg-white rounded-lg shadow-lg shadow-slate-500 relative overflow-hidden">
      <View className="flex-row items-center">
        {item.applicable_users.length > 0 ? (
          <View className="absolute z-50 -rotate-45 -left-28 top-7 w-full">
            <Text
              style={{ backgroundColor: "red" }}
              className="text-center text-white font-semibold text-lg"
            >
              Special Offer
            </Text>
          </View>
        ) : null}
        <View style={{ width: "30%" }} className="rounded-full overflow-hidden">
          <View className="bg-slate-200 ">
            <Image
              source={
                item.image
                  ? { uri: `${baseurl}/${item.image.path}` }
                  : require("../../../../assets/images/logo.png")
              }
              style={{ width: "100%", height: 100 }}
              className="w-28"
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={{ width: "70%" }} className="mx-2">
          <Text className="text-lg font-medium">{item.title}</Text>
          <Text className="text-sm">{item.discription}</Text>
          <View className="text-end">
            <TimeAndDate time={item.valid_date} />
          </View>
        </View>
      </View>
    </View>
  );
};
const isMemoize = (prev, next) => {
  return prev.item._id !== next.item._id;
};
export default memo(Offer_card, isMemoize);
