// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { View } from "react-native"; // Import React Native components
import AsyncStorage from '@react-native-async-storage/async-storage';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {

    const loadDarkMode = async () => {
      try {
        const storedMode = await AsyncStorage.getItem("darkMode");
        if (storedMode !== null) {
          setDarkMode(JSON.parse(storedMode));
        }
      } catch (error) {
        console.error("Failed to load darkMode from AsyncStorage:", error);
      }
    };

    loadDarkMode();
  }, []);

  const toggleTheme = async () => {
    try {
      const newMode = !darkMode;
      setDarkMode(newMode);
      await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
    } catch (error) {
      console.error("Failed to save darkMode to AsyncStorage:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <View style={{ flex: 1, backgroundColor: darkMode ? "#000" : "#FFF" }}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
