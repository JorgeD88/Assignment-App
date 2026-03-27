// screens/AddTaskScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

// Screen to add a new task
export default function AddTaskScreen({ navigation, tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Category dropdown state
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Home");
  const [items, setItems] = useState([
    { label: "Home", value: "Home" },
    { label: "Work", value: "Work" },
    { label: "Personal", value: "Personal" }
  ]);

  // DateTimePicker state
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Submit handler: create new task and add to list
  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      console.log("Title or description is empty"); // Debug log
      return;
    }

    const newTask = {
      id: (tasks.length + 1).toString(),
      title,
      description,
      category,
      dateTime: date.toISOString(),
      // Simple image selection based on category
      image:
        category === "Home"
          ? require("../assets/home.jpg")
          : category === "Work"
          ? require("../assets/work.jpg")
          : require("../assets/personal.jpg")
    };

    console.log("Adding new task:", newTask); // Debug log

    setTasks((prev) => [newTask, ...prev]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Task Description</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Category</Text>
      <DropDownPicker
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setItems}
        style={styles.dropdown}
        containerStyle={{ marginBottom: 15 }}
      />

      <Text style={styles.label}>Date & Time</Text>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <View style={styles.submitButton}>
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9"
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  multiline: {
    height: 80,
    textAlignVertical: "top"
  },
  dropdown: {
    borderRadius: 8,
    borderColor: "#ddd"
  },
  dateButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20
  },
  dateText: {
    fontSize: 14
  },
  submitButton: {
    marginTop: 10
  }
});
