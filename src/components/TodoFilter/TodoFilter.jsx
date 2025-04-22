import * as styles from "./TodoFilter.module.scss";
export const TodoFilter = ({ handlerFilterTasks }) => {
  return (
    <section className={styles.filter}>
      <label>Фильтр:</label>
      <select
        name="filter"
        id="filter"
        onChange={(e) => handlerFilterTasks(e.target.value)}
      >
        <option value="all">Все</option>
        <option value="completed">Завершенные</option>
        <option value="active">Активные</option>
      </select>
    </section>
  );
};
