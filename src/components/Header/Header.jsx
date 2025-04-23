import React from 'react';
import * as styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>Список задач</h2>
    </header>
  );
}
