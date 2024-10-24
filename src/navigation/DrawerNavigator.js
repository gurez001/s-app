import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import CustomHeaderButton from "./CustomHeaderButton";
import SearchBar from "../components/common/search/SearchBar";
import SettingScreen from "../screens/SettingScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => <CustomHeaderButton />,
        headerTitle: () => <SearchBar />,

        headerStyle: {
          backgroundColor: "#2ac5ff",
        },
        headerTransparent: true,
      })}
    >
      <Drawer.Screen name="home" component={TabNavigator} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
