import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Import bottom tabs
import { Ionicons } from "@expo/vector-icons"; // For using icons in tabs

// Pages
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import OrganisationPage from "./Pages/OrganisationPage";
import CreateOrganisation from "./Pages/CreateOrganisationPage";
import TeamPage from "./Pages/TeamPage";

// Context
import { AuthProvider } from "./Context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Bottom tab navigator

// Bottom Tab Navigator
function MainPageTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set icon name based on route name
          if (route.name === "MainPage") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "ProfilePage") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "OrganisationPage") {
            iconName = focused ? "people" : "people-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
      })}
    >
      <Tab.Screen name="MainPage" component={MainPage} options={{ title: "Home" }} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{ title: "Profile" }} />
      <Tab.Screen name="OrganisationPage" component={OrganisationPage} options={{ title: "Organisation" }} />
    </Tab.Navigator>
  );
}

// Stack Navigator
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="Main"
            component={MainPageTabs} // Use Tab.Navigator here
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="CreateOrganisation"
            component={CreateOrganisation}
            options={{ title: "Create Organisation" }}
          />
          <Stack.Screen
          name="OrganisationPage"
          component={OrganisationPage}
          options={{ title: "Organisation" }}
          />
          <Stack.Screen
            name="TeamPage"
            component={TeamPage}
            options={{ title: "Team" }}   
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
