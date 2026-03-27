// App.js
// App.js
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./navigation/AppNavigator";

// Root component: holds tasks state and passes it into navigator
export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Buy Groceries",
      description: "Milk, eggs, bread, fruit",
      category: "Home",
      dateTime: new Date().toISOString(),
      image: require("./assets/home.jpg")
    },
    {
      id: "2",
      title: "Finish React Native Exam",
      description: "Complete Task Manager app",
      category: "Work",
      dateTime: new Date().toISOString(),
      image: require("./assets/work.jpg")
    },
    {
      id: "3",
      title: "Go to the gym",
      description: "Leg day workout",
      category: "Personal",
      dateTime: new Date().toISOString(),
      image: require("./assets/personal.jpg")
    }
  ]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator tasks={tasks} setTasks={setTasks} />
    </GestureHandlerRootView>
  );
}
