// screens/TaskDetailsScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Details screen: shows full task info
export default function TaskDetailsScreen({ route }) {
  const { task } = route.params;

  console.log("Viewing details for task:", task.id); // Debug log

  const formattedDate = new Date(task.dateTime).toLocaleString();

  return (
    <View style={styles.container}>
      <Image source={task.image} style={styles.image} />
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.category}>Category: {task.category}</Text>
      <Text style={styles.date}>Date & Time: {formattedDate}</Text>
      <Text style={styles.description}>{task.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center"
  },
  category: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 4
  },
  date: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#333"
  }
});
