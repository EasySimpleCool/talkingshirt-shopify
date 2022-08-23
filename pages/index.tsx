import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>talkingsh*rt</title>
        <meta name="description" content="Lets talk sh*rt" />
      </Head>

      <main className={styles.main}>
        <Link href="/shirts/abc">
          <a>Go to pages/shirts/[shirt].js</a>
        </Link>
        <h1 className="text-3xl font-bold underline">
          Home
        </h1>
        <h1 className={styles.title}>
          Shirts
        </h1>
        <h1 className={styles.title}>
          Cart
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
