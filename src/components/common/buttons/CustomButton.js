import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({ color, title, onPress, loading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`p-4 rounded-lg ${color} ${loading ? 'opacity-50' : ''}`} // Apply Tailwind classes
      disabled={loading} // Disable the button when loading
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" /> // Show loading indicator
      ) : (
        <Text className="text-white text-center text-lg">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
