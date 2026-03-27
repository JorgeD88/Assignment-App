// components/TaskItem.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

// Single task row used by FlatList
export default function TaskItem({ task, onPress, onDelete }) {
  // Right action for swipe-to-delete
  const renderRightActions = () => {
    return (
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={task.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.description}>{task.description}</Text>
          <Text style={styles.category}>{task.category}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10
  },
  info: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 2
  },
  category: {
    fontSize: 12,
    color: "#007AFF"
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    marginVertical: 6,
    borderRadius: 10
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
