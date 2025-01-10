import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Store registered users
  const [currentUser, setCurrentUser] = useState(null); // Store the logged-in user

  // Register function
  const register = (username, password, avatar = null) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return { success: false, message: "Username already exists!" };
    }
  
    const newUser = { username, password, avatar }; // Set avatar during registration
    setUsers([...users, newUser]);
    return { success: true };
  };

  // Login function
  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user); // Set current logged-in user
      return { success: true };
    }
    return { success: false, message: "Invalid username or password!" };
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null); // Set currentUser to null
  };

  // Update avatar (for example, after selecting an image)
  const updateAvatar = (avatarUri) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, avatar: avatarUri };
      setCurrentUser(updatedUser); // Update current user's avatar
      setUsers(
        users.map((user) =>
          user.username === currentUser.username ? updatedUser : user
        )
      );
      console.log("Avatar Updated to:", avatarUri); // Debug log
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
