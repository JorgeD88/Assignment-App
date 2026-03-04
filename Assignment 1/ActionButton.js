// components/ActionButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ActionButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Toggle Greeting</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  }
});