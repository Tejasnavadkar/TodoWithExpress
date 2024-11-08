import { useEffect, useState } from 'react'
import { CreateTodo } from './componets/CreateTodo'
import './App.css'
import { Todos } from './componets/Todos'

function App() {
  const [todos, setTodos] = useState([])

  async function getTodo (){
    const todos = await fetch("http://localhost:3000/todos")
    const todo = await todos.json()
    console.log("heyyyyyyyyyyyyyy",todo.allTodos)
    setTodos(todo.allTodos)
    
    }
    useEffect(()=>{
      getTodo()
    },[])
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
