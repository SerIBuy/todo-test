import React from "react";
import { useState, useEffect } from "react";
import * as styles from "./TodoAdd.module.scss";
export const TodoAdd = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    setNewTask("");
  }, [handleAddTask]);
  return (
    <section className={styles["add-task"]}>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="button"
        className={styles["add-task__btn-add"]}
        onClick={() => handleAddTask(newTask)}
      >
        Добавить задачу
      </button>
    </section>
  );
};
