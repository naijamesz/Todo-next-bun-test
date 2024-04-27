'use client';
import { useEffect, useState } from 'react';

import Form from '@/components/Form';
import Header from '@/components/Header';
import TODOHero from '@/components/TODOHero';
import TODOList from '@/components/TODOList';

export default function Home() {
  const [todos, setTodos] = useState([]);

  // Retrieve data from localStorage when component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(todo => todo.is_completed == true).length;
  const total_todos = todos.length;
  return (
    <div className='wrapper'>
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}
