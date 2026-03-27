// screens/TaskListScreen.js
import React from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import TaskItem from "../components/TaskItem";

// Main screen: shows tasks using FlatList
export default function TaskListScreen({ navigation, tasks, setTasks }) {
  // Delete handler for swipe-to-delete
  const handleDelete = (id) => {
    console.log("Deleting task with id:", id); // Debug log
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button
          title="Add New Task"
          onPress={() => navigation.navigate("AddTask")}
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        // FlatList is primary; map only inside renderItem if needed
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => navigation.navigate("TaskDetails", { task: item })}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f2f2f2"
  },
  addButton: {
    marginBottom: 10
  }
});
