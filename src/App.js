import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Todo from './components/Todo/Todo';
import Todos from '../src/Todo.json';

function App() {
  const [todos,setTodos]=useState(Todos);
  console.log("Apptodo",todos);

  return (
    <div className="App">
      <h1>ToDAY's To Do List</h1>
      <Todo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
