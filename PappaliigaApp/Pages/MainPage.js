import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
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
      {/* User Greeting */}
      <Text style={styles.username}>Hello, {currentUser.username}</Text>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        {currentUser.avatar ? (
          <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        ) : (
          <Ionicons name="person-circle-outline" size={100} color="gray" />
        )}
      </View>

    
      
      {/* Logout Button */}
      {!isGuest && (
        <View style={styles.logoutContainer}>
        
          <Ionicons
            name="log-out-outline"
            size={28}
            color="tomato"
            onPress={handleLogout}
          />
          <Text style={styles.logoutText} onPress={handleLogout}>
            Logout
          </Text>
        </View>
      )}
    </View>
  );
}
