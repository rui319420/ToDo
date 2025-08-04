'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([] as ToDo[]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const newToDo: ToDo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newToDo]);
    setInputValue('');
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
          <button className={styles.addButton} onClick={handleAddTodo}>
            追加
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
