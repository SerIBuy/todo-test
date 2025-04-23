import React from 'react';
import * as styles from './TodoFilter.module.scss';

export default function TodoFilter({ handlerFilterTasks }) {
  return (
    <section className={styles.filter}>
      <label htmlFor="filter">
        Фильтр:
        <select
          id="filter"
          onChange={(e) => handlerFilterTasks(e.target.value)}
        >
          <option name="all" value="all">
            Все
          </option>
          <option name="completed" value="completed">
            Выполненные
          </option>
          <option name="active" value="active">
            Активные
          </option>
        </select>
      </label>
    </section>
  );
}
