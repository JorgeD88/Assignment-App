// navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskListScreen from "../screens/TaskListScreen";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

// Stack navigator: Home (list), Details, Add Task
const Stack = createNativeStackNavigator();

export default function AppNavigator({ tasks, setTasks }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" options={{ title: "Task Manager" }}>
          {(props) => (
            <TaskListScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
          options={{ title: "Task Details" }}
        />
        <Stack.Screen name="AddTask">
          {(props) => (
            <AddTaskScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
