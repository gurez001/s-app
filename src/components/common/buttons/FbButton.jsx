import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);

const FbButton = () => {
  return (
    <StyledTouchableOpacity className="bg-white py-3 px-5 rounded-md w-2/4 mr-1">
      <StyledView className="flex-row items-center">
        <Entypo name="facebook-with-circle" size={30} color="#000" />
        <StyledText className="text-black text-center text-lg ml-2">
          Google
        </StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  );
};
export default FbButton;
