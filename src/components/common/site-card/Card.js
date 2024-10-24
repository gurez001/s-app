import React, { memo } from "react";
import { Image, Text, TouchableOpacity, View, Linking } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getSiteURL } from "../../../lib/get-site-url";
import { useTheme } from "../../../lib/Theme/ThemeContext";
const baseusel = getSiteURL();

const Card = ({ item }) => {
  const { darkMode } = useTheme();
  const handlePress = (website) => {
    Linking.openURL(website);
  };

  return (
    <TouchableOpacity onPress={() => handlePress(item.link)}>
      <View
        style={{
          boxshadwwow: darkMode ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" : "",
        }}
        className={"mb-1 rounded shadow-lg p-3"}
      >
        <View className="gap-2 rounded-2xl flex-row items-center">
          <View className="w-3/5">
            <View>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                className={
                  darkMode
                    ? "text-blue-50 text-xl leading-5"
                    : "text-xl leading-5"
                }
              >
                {item.title}
              </Text>
              <View className="flex-row gap-1 items-center">
                <AntDesign
                  name="star"
                  size={10}
                  color="#fff"
                  className="bg-50 p-1 rounded-full"
                />
                <Text
                  className={
                    darkMode
                      ? "text-blue-50 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                >
                  4.5
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-end">
              <Text
                className={darkMode ? "text-blue-50 text-sm" : "text-sm"}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.discription}
              </Text>
            </View>
          </View>
          <View className="w-2/5  bg-slate-200">
            <View className="w-full flex-row justify-center">
              <View className="max-w-28 m-auto">
                <Image
                  source={
                    item.image
                      ? { uri: `${baseusel}/${item.image.path}` }
                      : require("../../../../assets/images/logo.png")
                  }
                  style={{ width: 100, height: 100 }}
                  className="w-28"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const isMemoize = (prev, next) => {
  return prev.item._id !== next.item._id;
};

export default memo(Card, isMemoize);
