import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import styles from "../Styles/Profilestyle";

export default function ProfilePage({ navigation }) {
  const [username, setUsername] = useState(); // Default name for guest users

  const handleSaveProfile = () => {
    Alert.alert("Profile Updated", `Username is now: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Update your profile information below:</Text>
      
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
    </View>
  );
}


