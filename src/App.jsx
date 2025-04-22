import * as styles from "./App.module.scss";
import { useState, useEffect } from "react";
import { todos } from "./components/TodoList/data";
import { TodoList } from "@/components/TodoList/TodoList";
import { Header } from "@/components/Header/Header";
import { TodoAdd } from "./components/TodoAdd/TodoAdd";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : todos;
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (newTask) => {
    if (newTask.trim()) {
      const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: newId, text: newTask, completed: false },
      ]);
    }
  };

  const handlerFilterTasks = (filter) => {
    setFilter(filter);
  };

  const handleEditTask = (id, updatedText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
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
        <TodoAdd handleAddTask={handleAddTask} />
        <TodoFilter handlerFilterTasks={handlerFilterTasks} />
      </main>
      <TodoList
        tasks={filteredTasks}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
        handleEditTask={handleEditTask}
      />
    </div>
  );
};
