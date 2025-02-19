import React from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo})
  }
  
  return (
    <div>TodoItem</div>
  )
}

export default TodoItem