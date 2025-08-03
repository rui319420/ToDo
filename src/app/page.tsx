'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>ToDoリスト</h1>
        <div>
          <input className={styles.input} type="text" placeholder="新しいToDo" />
          <button className={styles.addButton}>追加</button>
        </div>
      </main>
    </div>
  );
}
