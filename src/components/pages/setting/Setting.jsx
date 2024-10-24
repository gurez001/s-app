import React from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../../../lib/Theme/ThemeContext";
import { removeToken } from "../../../lib/AsyncStorage/asyncStorage";

const Setting = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleLogout = async () => {
    await removeToken("token");
  };

  return (
    <View className="flex-1 justify-end h-screen ">
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => handleLogout()}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: "#ff4d4d",
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Setting;
