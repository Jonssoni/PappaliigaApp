import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#181430',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  teamItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  teamGame: {
    fontSize: 16,
    color: 'gray',

  },
  noTeamsText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: 'gray',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});