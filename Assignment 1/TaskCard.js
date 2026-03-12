import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskCard({ task, onPress, onComplete }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={task.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>
          {task.completed ? "✔️ " : ""}{task.title}
        </Text>
        <Text style={styles.description}>{task.description}</Text>

        <TouchableOpacity style={styles.button} onPress={onComplete}>
          <Text style={styles.buttonText}>
            {task.completed ? "Undo" : "Mark Completed"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    color: "#555",
    marginVertical: 5
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 5
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600"
  }
});
