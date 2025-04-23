import React, { useState, useEffect } from 'react';

import * as styles from './TodoAdd.module.scss';

export default function TodoAdd({ handleAddTask }) {
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setNewTask('');
  }, [handleAddTask]);
  return (
    <section className={styles['add-task']}>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="button"
        className={styles['add-task__btn-add']}
        onClick={() => handleAddTask(newTask)}
      >
        Добавить задачу
      </button>
    </section>
  );
}
