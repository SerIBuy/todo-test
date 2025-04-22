import { useState, useEffect } from "react";
import * as styles from "./TodoAdd.module.scss";
export const TodoAdd = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    setNewTask("");
  }, [handleAddTask]);
  return (
    <section className={styles["add-task"]}>
      <label htmlFor="new-task">Добавить новую задачу:</label>
      <input
        id={"new-task"}
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className={styles["add-task__button"]}
        onClick={() => handleAddTask(newTask)}
      >
        Добавить задачу
      </button>
    </section>
  );
};
