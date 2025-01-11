import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../Context/AuthContext';
import styles from '../Styles/Mainstyle';

export default function MainPage({ navigation, route }) {
  const { currentUser, logout } = useContext(AuthContext); // Get currentUser data from context
  const isGuest = route.params?.isGuest || false;

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleLogout = () => {
    logout();
    navigation.replace("Login"); // Navigate back to Login screen
  };

  console.log("Current User Avatar:", currentUser.avatar);
  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hello, {currentUser.username}</Text>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        {currentUser.avatar ? (
          <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        ) : (
          <Ionicons name="person-circle-outline" size={100} color="gray" />
        )}
      </View>

      {/* Username */}
      

      {/* Button for other actions like editing profile */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProfilePage")}>
  <Text style={styles.buttonText}>Profile</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OrganisationPage")}>  
        <Text style={styles.buttonText}>Organisation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Edit profile")}>
        <Text style={styles.buttonText}>Matches</Text>
      </TouchableOpacity>

      {/* You can add more profile-related info or buttons here */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

