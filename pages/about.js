import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | About</title>
        <meta name="description" content="LibreNews | About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Libre News</h1>
        <h2>About</h2>

				<p>Lorem ipsum dolor sit amet</p>
      </main>

    </div>
  )
}

export default About
