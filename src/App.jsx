import * as styles from "./App.module.scss";
import { useState, useEffect, useReducer } from "react";
import { todos } from "./components/TodoList/data";
import { TodoList } from "@/components/TodoList/TodoList";
import { Header } from "@/components/Header/Header";
import { TodoAdd } from "./components/TodoAdd/TodoAdd";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      if (action.payload.trim()) {
        const newId = state.length ? state[state.length - 1].id + 1 : 1;
        return [
          ...state,
          { id: newId, text: action.payload, completed: false },
        ];
      }
      return state;
    }
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.updatedValue }
          : task
      );
    default:
      return state;
  }
};
export const App = () => {
  const [tasks, dispatch] = useReducer(reducer, undefined, () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : todos;
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handlerFilterTasks = (filter) => {
    setFilter(filter);
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
        <TodoAdd
          handleAddTask={(newTask) =>
            dispatch({ type: "ADD_TASK", payload: newTask })
          }
        />
        <TodoFilter handlerFilterTasks={handlerFilterTasks} />
        <TodoList
          tasks={filteredTasks}
          handleDeleteTask={(id) =>
            dispatch({ type: "DELETE_TASK", payload: id })
          }
          handleToggleTask={(id) =>
            dispatch({ type: "TOGGLE_TASK", payload: id })
          }
          handleEditTask={(id, updatedValue) =>
            dispatch({ type: "EDIT_TASK", payload: { id, updatedValue } })
          }
        />
      </main>
    </div>
  );
};
