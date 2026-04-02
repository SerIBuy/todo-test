import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "@/components/TodoList/TodoList";
import Header from "@/components/Header/Header";
import * as styles from "./App.module.scss";

import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoFilter from "./components/TodoFilter/TodoFilter";

import { addTask, deleteTask, toggleTask, editTask } from "./tasksSlice";

export default function App() {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handlerFilterTasks = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const getFilterTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "active":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilterTasks();

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <TodoAdd handleAddTask={(newTask) => dispatch(addTask(newTask))} />
        <TodoFilter handlerFilterTasks={handlerFilterTasks} />
        <TodoList
          tasks={filteredTasks}
          handleDeleteTask={(id) => dispatch(deleteTask(id))}
          handleToggleTask={(id) => dispatch(toggleTask(id))}
          handleEditTask={(id, updatedValue) =>
            dispatch(editTask({ id, updatedValue }))
          }
        />
      </main>
    </div>
  );
}
