import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos)
        setLoading(false)
      })
  }, []) 

  return {todos: todos, loading: loading}
}


function App() {
  const {todos, loading} = useTodos()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {todos.map(todo => <Track todo={todo}/>)}
    </div>
  )

  
}

function Track({todo}) {
  return <div>
    {todo.title}
    <br></br>
    {todo.description}
  </div>
}

export default App
