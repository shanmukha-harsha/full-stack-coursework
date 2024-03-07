import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos")
  //     .then(async function(res) {
  //       const json = await res.json;
  //       setTodos(json.todos)
  //     })
  // }, [])

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(function(response) {
  //       setTodos(response.data.todos)
  //     })
  // }, [])

  // console.log(todos)
  const[bid, setBid] = useState(1)


  

  return (
    <div>
      {/* {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)} */}
      <button onClick={function() {setBid(1)}}>1</button>
      <button onClick={function() {setBid(2)}}>2</button>
      <button onClick={function() {setBid(3)}}>3</button>
      <button onClick={function() {setBid(4)}}>4</button>
      <TodoWithId id={bid}/>
    </div>
  )
}

function Todo({title, description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

function TodoWithId({id}) {
  const [todo,setTodo] = useState([]);
  let url = "https://sum-server.100xdevs.com/todo?id=" + id
  console.log(url)
  useEffect(() => {
    axios.get(url)
      .then(function(response) {
        console.log(response)
        setTodo(response.data.todo)
      })
  }, [id])

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}

export default App
