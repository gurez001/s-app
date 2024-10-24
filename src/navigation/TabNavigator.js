import React from "react";
import { Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BranchScreen from "../screens/BranchScreen";
import OffersScreen from "../screens/OffersScreen";
import RefferalScreen from "../screens/RefferalScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2ac5ff",
          height: 60,
          position: "absolute",
          bottom: 10,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },

        tabBarIcon: ({ focused }) => {
          let iconName;
          let IconComponent;

          switch (route.name) {
            case "Websites":
              IconComponent = AntDesign;
              iconName = "rocket1";
              break;
            case "Offers":
              IconComponent = MaterialIcons;
              iconName = "local-offer";
              break;
            case "Branch":
              IconComponent = Entypo;
              iconName = "flow-branch";
              break;
            case "Rewards":
              IconComponent = FontAwesome;
              iconName = "inr";
              break;
            default:
              break;
          }

          const iconColor = focused ? "#2ac5ff" : "#000"; // Change color when active

          return (
            <Animated.View
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: focused ? -60 : 0,
                borderTopWidth: focused ? 1 : 0,
                borderTopColor: focused ? "rgb(203 213 225)" : "transparent",
                borderRightWidth: focused ? 1 : 0,
                borderRightColor: focused ? "rgb(203 213 225)" : "transparent",
              }}
              className="bg-white shadow-xl rounded-full transition duration-150 ease-in-out "
            >
              <IconComponent name={iconName} size={25} color={iconColor} />
            </Animated.View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Websites"
        component={HomeScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Branch"
        component={BranchScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Rewards"
        component={RefferalScreen}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
