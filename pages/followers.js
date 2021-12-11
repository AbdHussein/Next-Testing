import axios from 'axios'
import Head from 'next/head'
import FollowersList from '../components/FollowersList'
import Header from '../components/Header'
import styles from '../styles/followers.module.css'
import Home from '../styles/Home.module.css'

const followers = ({followers}) => {
    return (
        <div className={styles.followers}>
          <Head>
            <title>Followers</title>
          </Head>
          <div className={Home.container}>
            <Header title="Followers" />
            <FollowersList followers={followers} />
          </div>
        </div>
    )
}


export async function getStaticProps() {
    const {data} =  await axios.get("https://randomuser.me/api/?results=5")
    return {
      props: {
          followers: data.results
      }, 
    }
  }

export default followers;