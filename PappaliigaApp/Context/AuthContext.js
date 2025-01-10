import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Store registered users
  const [currentUser, setCurrentUser] = useState(null); // Store the logged-in user

  const register = (username, password) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return { success: false, message: "Username already exists!" };
    }
    setUsers([...users, { username, password }]);
    return { success: true };
  };

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

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
