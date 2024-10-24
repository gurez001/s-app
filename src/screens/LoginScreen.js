import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";

import { useDispatch, useSelector } from "react-redux";
import { Alert_ } from "../components/common/alert/Alert";
import CustomButton from "../components/common/buttons/CustomButton";
import {
  FETCH_USER_ERROR,
  FETCH_USER_RESET,
} from "../store/redux/constants/user_actionTypes";
import { generateRandomString } from "../lib/generateRandomString";
import { user_auth } from "../api/authapi";
import Login from "../components/auth/Login";

const LoginScreen = () => {
 return (<Login/>
  );
};


const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 0,
  },
});

export default LoginScreen;