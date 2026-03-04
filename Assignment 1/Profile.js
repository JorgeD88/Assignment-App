// components/Profile.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile({ name, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333"
  }
});