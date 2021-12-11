import Head from 'next/head'
import Image from 'next/image'
import Todo from '../components/Todo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
     <Head>
       <title>Todo App</title>
     </Head>
     <div className={styles.container}>
       <Todo />
     </div>
    </div>
  )
}
