import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
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

  return (
    <View style={styles.container}>
      <Image source={require("../Images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
