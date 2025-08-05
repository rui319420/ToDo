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

  const handleDeleteTodo = (idToDelete: number) => {
    const newTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(newTodos);
  };

  const handleToggleComplete = (idToToggle: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === idToToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
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
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? styles.completed : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <span>{todo.text}</span>
              <button className={styles.deleteButton} onClick={() => handleDeleteTodo(todo.id)}>
                削除
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
