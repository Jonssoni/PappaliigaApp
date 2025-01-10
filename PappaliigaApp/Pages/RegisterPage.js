import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../Styles/Loginstyles";
import { AuthContext } from "../Context/AuthContext";

export default function RegisterPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert("All fields are required!");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      const result = register(username, password);
      if (result.success) {
        alert("Registration successful! Please log in.");
        navigation.navigate("Login");
      } else {
        alert(result.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}
