import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
      label: {
        fontSize: 16,
        marginVertical: 10,
      },
      picker: {
        height: 60,
        width: '100%',
        marginBottom: 20,
      },
      avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
      defaultAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'gray',
        marginBottom: 10,
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