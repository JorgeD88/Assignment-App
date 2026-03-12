import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function TaskDetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Image source={task.image} style={styles.image} />
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    color: "#555",
    textAlign: "center"
  }
});
