import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import styles from "../Styles/Teamstyle";

export default function TeamPage({ route }) {
  const { team } = route.params; // Retrieve the team data from navigation
  const [teamMembers, setTeamMembers] = useState([]); // State for managing team members
  const [newMember, setNewMember] = useState(""); // State for adding a new member

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember(""); // Clear input after adding
    } else {
      alert("Please enter a valid team member name.");
    }
  };

  const renderMember = ({ item }) => (
    <View style={styles.memberItem}>
      <Text style={styles.memberName}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Team Details Section */}
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Team Details</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Team Name:</Text>
          <Text style={styles.value}>{team.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Game:</Text>
          <Text style={styles.value}>{team.game}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Team Captain:</Text>
          <Text style={styles.value}>{team.captain || "Not assigned"}</Text>
        </View>
      </View>

      {/* Team Members Section */}
      <View style={styles.memberContainer}>
        <Text style={styles.title}>Team Members</Text>
        <FlatList
          data={teamMembers}
          renderItem={renderMember}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.noMembersText}>No team members yet.</Text>
          }
        />
        <View style={styles.addMemberContainer}>
          <TextInput
            placeholder="Enter new member name"
            value={newMember}
            onChangeText={setNewMember}
            style={styles.input}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddMember}>
            <Text style={styles.addButtonText}>Add Member</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}