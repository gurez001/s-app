import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";
import Loader from "../components/common/loader/Loader";
import { getToken } from "../lib/AsyncStorage/asyncStorage";
import { View, ActivityIndicator } from "react-native";

const AppNavigator = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getToken("token");
        if (token) {
          setToken(true);
        } else {
          setToken(null);
        }
      } catch (error) {
        console.error("Failed to load token", error);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <NavigationContainer>
      {token ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
