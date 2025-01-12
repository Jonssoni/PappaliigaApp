import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Styles/CreateOrganisationstyle";

export default function CreateOrganisationPage({ navigation }) {
  const [teamName, setTeamName] = useState("");
  const [game, setGame] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error state for validation feedback
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

      // Clear the form
      setTeamName("");
      setGame("");
      setErrorMessage("");

      // Navigate back to OrganisationPage
      navigation.navigate('Main', { screen: 'OrganisationPage' });
    } else {
      setErrorMessage("Please provide both a team name and select a game.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Organization</Text>
      <TextInput
        placeholder="Name of the team"
        style={styles.input}
        value={teamName}
        onChangeText={setTeamName}
        accessibilityLabel="Team Name Input"
        accessibilityHint="Enter the name of your team"
      />

      <Picker
        selectedValue={game}
        style={styles.picker}
        onValueChange={(itemValue) => setGame(itemValue)}
        accessibilityLabel="Select Game Picker"
        accessibilityHint="Select the game for your team"
      >
        <Picker.Item label="Select a game" value="" />
        <Picker.Item label="CS2" value="CS2" />
        <Picker.Item label="League Of Legends" value="League Of Legends" />
        <Picker.Item label="Valorant" value="Valorant" />
      </Picker>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleCreate}
        accessibilityLabel="Create Organization Button"
        accessibilityHint="Create a new organization with the given details"
      >
        <Text style={styles.buttonText}>Create Organization</Text>
      </TouchableOpacity>
    </View>
  );
}
