import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  detailContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memberContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
  },
  noMembersText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
  addMemberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  memberItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  memberName: {
    fontSize: 16,
  },
});
