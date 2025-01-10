import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import * as ImagePicker from 'expo-image-picker'; // Import expo-image-picker
import styles from "../Styles/Registerstyle";




export default function RegisterPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // State for storing avatar
  const { register, updateAvatar } = useContext(AuthContext);

  // Function to open image picker
  const pickAvatar = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (!permissionResult.granted) {
        alert("Permission to access the media library is required!");
        return;
      }
  
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Correct property
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!pickerResult.canceled) {
        setAvatar(pickerResult.assets[0].uri); // Save avatar URI to state
        console.log("Avatar selected:", pickerResult.assets[0].uri); // Debugging
      } else {
        console.log("Image picker was canceled.");
      }
    } catch (error) {
      console.error("Error while picking avatar:", error);
    }
  };
  
  

  

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert("All fields are required!");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      const result = register(username, password, avatar); // Pass avatar here
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
      
      {/* Avatar section */}
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.defaultAvatar}></View>
        )}
       <TouchableOpacity style={styles.button} onPress={pickAvatar}>
  <Text style={styles.buttonText}>Pick Avatar</Text>
</TouchableOpacity>
      </View>

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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}


