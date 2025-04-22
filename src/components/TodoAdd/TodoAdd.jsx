import { useState, useEffect } from "react";
import * as styles from "./TodoAdd.module.scss";
export const TodoAdd = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    setNewTask("");
  }, [handleAddTask]);
  return (
    <section className={styles["add-task"]}>
      <label htmlFor="new-task">Добавить задачу:</label>
      <input
        id={"new-task"}
        type="text"
        placeholder="Добавить задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className={styles["add-task__btn-add"]}
        onClick={() => handleAddTask(newTask)}
      >
        Добавить задачу
      </button>
    </section>
  );
};
