import './App.css'
import { useState } from 'react'

let counter = 4;

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    id: 2,
    title: "Study DSA",
    description: "Study DSA from 9-11",
    completed: true
  }, {
    id: 3,
    title: "Study Full Stack",
    description: "Study Full Stack Tomorrow",
    completed: false
  }]);

  function addTodo() {
    setTodos([...todos, {
      id:counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {/* {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)} */}
      {todos.map(function(todo) {
        return <Todos key={todo.id} title={todo.title} description={todo.description}></Todos>
      })}
    </div>
  )
}

function Todos({title, description}) {

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default App
