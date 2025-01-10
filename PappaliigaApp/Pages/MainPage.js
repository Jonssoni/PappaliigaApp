import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../Context/AuthContext"; // Use correct context import

export default function MainScreen({ navigation }) {
  const { currentUser, logout } = useContext(AuthContext); // Use useContext hook with AuthContext

  return (
    <View>
      {currentUser ? (
        <View>
          <Text>Welcome, {currentUser.username}!</Text>
          <Button title="Logout" onPress={() => { logout(); navigation.navigate("Login"); }} />
        </View>
      ) : (
        <Text>Please log in first</Text>
      )}
    </View>
  );
}
