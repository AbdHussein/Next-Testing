import styles from '../styles/TodoList.module.css'
import TodoFooter from './TodoFooter';

function TodoList({
    todos, setTodos
}) {

    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className={styles.container}>
            <div className={styles.todos}>
                <div>
                    {
                        todos.map((todo, index) => (
                            <div 
                                key={todo.id}
                                className={`${styles["item"]} ${todo.completed && styles["active"]}`} 
                                onClick={() => updateTask(todo.id)}
                            >
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList
