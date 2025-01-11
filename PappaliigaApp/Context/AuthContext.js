import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to provide state and functions to the entire app
export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Store registered users
  const [currentUser, setCurrentUser] = useState(null); // Store the logged-in user
  const [teams, setTeams] = useState([]); // Store the list of teams

  // Function to register a new user
  const register = (username, password, avatar = null) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return { success: false, message: "Username already exists!" };
    }

    const newUser = { username, password, avatar, teams: [] }; // Include teams in the user object
    setUsers([...users, newUser]);
    return { success: true };
  };

  // Function to log in an existing user
  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      return { success: true };
    }
    return { success: false, message: "Invalid username or password!" };
  };

  // Function to log out the current user
  const logout = () => {
    setCurrentUser(null);
  };

  // Function to update the current user's avatar
  const updateAvatar = (avatarUri) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, avatar: avatarUri };
      setCurrentUser(updatedUser);
      setUsers(
        users.map((user) =>
          user.username === currentUser.username ? updatedUser : user
        )
      );
      console.log("Avatar Updated to:", avatarUri);
    }
  };

  // Function to add a new team
  const addTeam = (team) => {
    if (currentUser) {
      setTeams([...teams, team]);  // Add the new team globally
      const updatedUser = {
        ...currentUser,
        teams: [...currentUser.teams, team], // Add the team to the current user's list
      };
      setCurrentUser(updatedUser); // Update the current user's state
      setUsers(
        users.map((user) =>
          user.username === currentUser.username ? updatedUser : user
        ) // Update the users list
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
        updateAvatar,
        addTeam, // Include addTeam in the context value
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
