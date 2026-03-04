// App.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ActionButton from "./components/ActionButton";

export default function App() {
  const [greeting, setGreeting] = useState("");

  const toggleGreeting = () => {
    setGreeting(prev =>
      prev === "" ? "Hello! Welcome to React Native" : ""
    );
  };

  return (
    <View style={styles.container}>
      <Header title="My First React Native App" />

      <Profile
        name="Ruben"
        image={require("./assets/profile.jpg")}
      />

      <Text style={styles.greeting}>{greeting}</Text>

      <ActionButton onPress={toggleGreeting} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  greeting: {
    fontSize: 18,
    marginVertical: 20,
    color: "#333"
  }
});