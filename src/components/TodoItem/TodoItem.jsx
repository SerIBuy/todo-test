import { useState } from "react";
import * as styles from "./TodoItem.module.scss";
import cn from "classnames";
export const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  return (
    <li
      className={cn(styles["todo-item"], {
        [styles["todo-item--completed"]]: task.completed,
      })}
    >
      <input
        type="checkbox"
        checked={task.completed}
        readOnly
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          defaultValue={task.text}
          onBlur={(e) => {
            editTask(task.id, e.target.value);
            setIsEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editTask(task.id, e.target.value);
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button
        className={styles["todo-item__btn-delete"]}
        onClick={() => setIsEditing(!isEditing)}
      >
        Редактировать
      </button>
      <button
        className={styles["todo-item__btn-delete"]}
        onClick={() => deleteTask(task.id)}
      >
        Удалить
      </button>
    </li>
  );
};
