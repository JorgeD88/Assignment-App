// components/Header.js
import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4a4a4a"
  }
});