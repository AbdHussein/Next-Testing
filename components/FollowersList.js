import Link from "next/link"
import styles from '../styles/followers.module.css'
import todo from '../styles/TodoFooter.module.css'
import Image from 'next/image'

const FollowersList = ({followers}) => {
    return (
        <div className={styles.container}>
            <div>
                {followers && followers.map((follower, index) => (
                    <div className={styles.item} data-testid={`follower-card-${index}`} key={`follower-card-${index}`}>
                        <Image src={follower.picture.large} alt="Follower" width='100' height='30'/>
                        <div className={styles.details}>
                            <div className={styles.itemName}>
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={todo.todo}>
                <Link href="/" >Go Back</Link>
            </div>
        </div>
    )
}

export default FollowersList
