import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#181430",
      
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