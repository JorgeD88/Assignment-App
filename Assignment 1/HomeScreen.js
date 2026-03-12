import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy Groceries",
      description: "Milk, eggs, bread, fruit",
      image: require("../assets/task1.jpg"),
      completed: false
    },
    {
      id: 2,
      title: "Finish Homework",
      description: "React Native assignment due tonight",
      image: require("../assets/task2.jpg"),
      completed: false
    },
    {
      id: 3,
      title: "Gym Workout",
      description: "Leg day — don’t skip it",
      image: require("../assets/task3.jpg"),
      completed: false
    }
  ]);

  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Task Manager" />

      <ScrollView>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onPress={() => navigation.navigate("TaskDetails", { task })}
            onComplete={() => toggleComplete(task.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5"
  }
});
