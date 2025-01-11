import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Styles/Organisationstyle";

export default function OrganisationPage({ navigation }) {
    const { currentUser } = useContext(AuthContext);
  
    const teams = currentUser?.teams || [];
  
    const renderTeam = ({ item }) => (
        
      <View style={styles.teamItem}>
        <Text style={styles.teamName}>{item.name}</Text>
        <Text style={styles.teamGame}>{item.game}</Text>
      </View>
    );
  
    const handleCreateOrganisation = () => {
      navigation.navigate('CreateOrganisation');
    };

    
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Teams</Text>
        {teams.length > 0 ? (
          <FlatList
            data={teams}    
            renderItem={renderTeam}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.noTeamsText}>You are not in any teams.</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleCreateOrganisation}>
          <Text style={styles.buttonText}>Create New Organisation</Text>
        </TouchableOpacity>
      </View>
    );
  }
