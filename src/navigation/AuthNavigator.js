import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@screens/LoginScreen"; // Your login screen
import OTPScreen from "../screens/OTPScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
