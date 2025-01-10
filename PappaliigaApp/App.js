import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Import bottom tabs
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import RegisterPage from "./Pages/RegisterPage";
import { AuthProvider } from "./Context/AuthContext";
import { Ionicons } from "@expo/vector-icons"; // For using icons in tabs

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Bottom tab navigator

// Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Main") {
            iconName = focused ? "home" : "home-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Main" component={MainPage} />
      {/* You can add more screens here for bottom navigation */}
    </Tab.Navigator>
  );
}

// Stack Navigator (for Login/Register screens)
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen
            name="Main"
            component={TabNavigator} // Using the TabNavigator here
            options={{ headerShown: false }} // Hide header for bottom tab screens
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
