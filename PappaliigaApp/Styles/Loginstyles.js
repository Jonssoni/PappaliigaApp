// Styles/Loginstyles.js
import { Button, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#181430',
    marginTop: 30,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  logo: {
    width: 360,
    height: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
