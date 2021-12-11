import Link from 'next/link'
import React from 'react'
import styles from "../styles/TodoFooter.module.css"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className={styles.todo}>
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link href="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
