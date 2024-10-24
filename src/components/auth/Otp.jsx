import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import OtpTextInput from "react-native-text-input-otp";
import { Otp_auth } from "../../api/authapi";
import { Alert_ } from "../../components/common/alert/Alert";
import CustomButton from "../../components/common/buttons/CustomButton";
import { generateRandomString } from "../../lib/generateRandomString";
import { FETCH_USER_OTP_DETAILS_RESET } from "../../store/redux/constants/user_actionTypes";
import * as Updates from "expo-updates";
const Otp = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [otp, setOtp] = useState("");
    const { user_details } = useSelector((state) => state.user);
    const { loading, success, error } = useSelector((state) => state.otp);
  
    const handleSubmit = () => {
      const uuid = generateRandomString(10);
      dispatch(Otp_auth(otp, user_details.user_id, uuid));
    };
  
    useEffect(() => {
      if (success) {
        navigation.navigate("Websites");
        dispatch({ type: FETCH_USER_OTP_DETAILS_RESET });
        Updates.reloadAsync();
      }
    }, [success, dispatch, navigation,Updates ]);
  
    return (
      <View className="p-10 flex-col items-center justify-center h-full">
        <View className="">
          <View>
            <Text className="text-center text-lg">
              We have sent a verification code to
            </Text>
            <Text className="text-center text-lg">
              {user_details && user_details.phone_number}
            </Text>
          </View>
          <View className="mb-[20px]">
            <OtpTextInput
              otp={otp}
              setOtp={setOtp}
              digits={6}
              style={{
                borderRadius: 0,
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                height: 45,
              }}
              fontStyle={{ fontSize: 20, fontWeight: "bold" }}
              focusedStyle={{ borderColor: "#5cb85c", borderBottomWidth: 2 }}
            />
          </View>
          {error && <Alert_ type={"error"} msg={error} />}
          <View className="min-w-16">
            <CustomButton
              title="Enter OTP"
              loading={loading}
              color={"bg-black py-2 rounded-lg mt-5"}
              onPress={handleSubmit}
            />
          </View>
        </View>
        <View className="mt-4">
          <View className="flex-row items-center justify-center">
            <Text className="text-center text-sm">
              We have sent a verification code to
            </Text>
          </View>
          <View className="flex-row items-center justify-center">
            <Text className="text-center text-sm mr-1">
              Didn't receive the code?
            </Text>
            <Text className="text-center text-sm ml-1">Resend now</Text>
          </View>
        </View>
      </View>
    );
  };

export default Otp