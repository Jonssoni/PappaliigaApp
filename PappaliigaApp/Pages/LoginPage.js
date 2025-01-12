import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/Loginstyles";
import { AuthContext } from "../Context/AuthContext";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const result = login(username, password);
    if (result.success) {
      navigation.navigate("Main");
    } else {
      alert(result.message);
    }
  };

  const handleGuestLogin = () => {
    navigation.navigate("Main", { isGuest: true }); // Pass a parameter to indicate guest mode
  };

  return (
    <View style={styles.container}>
      <Image source={require("../Images/logo.png")} style={styles.logo} />
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
