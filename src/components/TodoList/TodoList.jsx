import React from 'react';
import TodoItem from '@/components/TodoItem/TodoItem';
import * as styles from './TodoList.module.scss';

export default function TodoList({
  tasks,
  handleToggleTask,
  handleDeleteTask,
  handleEditTask,
}) {
  return (
    <section>
      <ul className={styles['todo-list']}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={handleDeleteTask}
            toggleTask={handleToggleTask}
            editTask={handleEditTask}
          />
        ))}
      </ul>
    </section>
  );
}
