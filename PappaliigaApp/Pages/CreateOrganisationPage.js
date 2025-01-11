import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../Context/AuthContext';
import styles from '../Styles/CreateOrganisationstyle';

export default function CreateOrganisationPage({ navigation }) {
  const [teamName, setTeamName] = useState('');
  const [game, setGame] = useState('');
  const { addTeam } = useContext(AuthContext);

  const handleCreate = () => {
    if (teamName && game) {
      const newTeam = {
        id: Date.now(), // Generate a unique ID
        name: teamName,
        game,
      };

      // Add the new team to the global state
      addTeam(newTeam);

      // Navigate back to OrganisationPage
      navigation.navigate('OrganisationPage');
    } else {
      alert('Please provide both a team name and select a game.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Organisation</Text>
      <TextInput
        placeholder="Name of the team"
        style={styles.input}
        value={teamName}
        onChangeText={setTeamName}
      />
     
      <Picker
        selectedValue={game}
        style={styles.picker}
        onValueChange={(itemValue) => setGame(itemValue)}
      >
        <Picker.Item label="Select a game" value="" />
        <Picker.Item label="CS2" value="CS2" />
        <Picker.Item label="League Of Legends" value="League Of Legends" />
        <Picker.Item label="Valorant" value="Valorant" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Organisation</Text>
      </TouchableOpacity>
    </View>
  );
}
