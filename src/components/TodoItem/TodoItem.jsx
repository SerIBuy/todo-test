import { useState } from "react";
import * as styles from "./TodoItem.module.scss";
import cn from "classnames";
export const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li
      className={cn(styles["todo-item"], {
        [styles["todo-item--completed"]]: task.completed,
      })}
    >
      <div className={styles["todo-item__left-side"]}>
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
          <span
            className={cn(styles["todo-item__text"], {
              [styles["todo-item__text--completed"]]: task.completed,
            })}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className={styles["todo-item__right-side"]}>
        <button
          className={cn(
            styles["todo-item__btn"],
            styles["todo-item__btn--edit"]
          )}
          onClick={() => setIsEditing(!isEditing)}
        >
          Редактировать
        </button>
        <button
          className={styles["todo-item__btn"]}
          onClick={() => deleteTask(task.id)}
        >
          Удалить
        </button>
      </div>
    </li>
  );
};
