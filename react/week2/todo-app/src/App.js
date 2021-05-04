import React, { useEffect, useState } from "react";
import Todos from './Todos/Todos';
import AddTodo from './Todos/AddTodo';
import './App.css';

const arrayOfTodos = [
  {
    id: 1,
    description: "Write grocery list"
  },
  {
    id: 2,
    description: "Buy a gift for a firend"
  },
  {
    id: 3,
    description: "Book Dr appointment"
  }
];

function App() {
  const [todos, setTodos] = useState(arrayOfTodos);
  const [timer, setTimer] = useState(0)

  //setting timer on website
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1)
    }, 1000)
  })


  //adding todo
  const addTodo = (description) => {
    if (description) {
      const id = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
      console.log(id)
      setTodos(todos.concat({
        id: id,
        description: description
      }
      ))
    }
  }
  //deleting todo
  const deleteTodo = (id) => {
    console.log("delete", id)
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-app">
      <h1>Todo LIst </h1>
      <h2>You have used {timer} seconds on this website</h2>
      { todos.length > 0 ?
        <Todos todoArray={todos} onDelete={deleteTodo} /> : "No items"}
      <AddTodo onAdd={addTodo} />
    </div>
  );
}

export default App;
