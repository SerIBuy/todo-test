import { createSlice } from "@reduxjs/toolkit";
import todos from "./data";
import { act } from "react";

const initialState = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : todos;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.trim()) {
        state.push({
          id: state.length ? state[state.length - 1].id + 1 : 1,
          text: action.payload,
          completed: false,
        });
      }
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleTask: (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      });
    },
    editTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.updatedValue;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
