import { useState } from "react";
import { v4 } from "uuid";
import styles from '../styles/TodoInput.module.css'

const AddInput = ({
    todos,
    setTodos
}) => {
    const [todo, setTodo] = useState("")

    const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className={styles.container}>
            <input 
                className={styles.input}
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
            <button 
                className={styles.addBtn}
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddInput
