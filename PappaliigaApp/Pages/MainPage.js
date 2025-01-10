import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../Context/AuthContext';
import styles from '../Styles/Mainstyle';

export default function MainPage({ navigation }) {
  const { currentUser, logout } = useContext(AuthContext); // Get currentUser data from context

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
      <Text style={styles.title}>Profile</Text>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        {currentUser.avatar ? (
          <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        ) : (
          <Ionicons name="person-circle-outline" size={100} color="gray" />
        )}
      </View>

      {/* Username */}
      <Text style={styles.username}>{currentUser.username}</Text>

      {/* Button for other actions like editing profile */}
      <Button title="Edit Profile" onPress={() => { /* Handle Edit Profile */ }} />

      {/* You can add more profile-related info or buttons here */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

