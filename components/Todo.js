import Header from './Header'
import AddInput from './AddInput'
import TodoList from './TodoList'
import styles from '../styles/Todo.module.css'
import { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])

    return (
        <div className={styles.todo}>
            <Header title="Todo" />
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo
