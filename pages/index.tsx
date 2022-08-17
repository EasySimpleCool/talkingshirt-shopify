import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>talkingsh*rt</title>
        <meta name="description" content="Lets talk sh*rt" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Store
        </h1>
        <div className={styles.products}>
          Products
          {/* TODO: add products */}
        </div>
      </main>
    </div>
  )
}

export default Home
