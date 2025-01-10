import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../Context/AuthContext';

export default function MainPage({ navigation }) {
  const { currentUser } = useContext(AuthContext); // Get currentUser data from context

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});