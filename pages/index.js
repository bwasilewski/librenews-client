import Head from 'next/head'
import Headlines from '../components/headlines'
import styles from '../styles/Home.module.css'

function Home({ headlines }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Free News Forever</title>
        <meta name="description" content="Free News Forever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { headlines && <Headlines items={headlines} /> }
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/v1/headlines/fetch?size=20`)
  const json = await res.json()
  return { headlines: json }
}

export default Home
