'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>ToDoリスト</h1>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="新しいToDo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={styles.addButton}>追加</button>
        </div>
        <p>現在の入力値: {inputValue}</p>
      </main>
    </div>
  );
}
