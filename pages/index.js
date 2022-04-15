import Head from 'next/head'
import Headlines from '../components/headlines'
import styles from '../styles/Home.module.css'

function Home({ headlines, sources }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Free News Forever</title>
        <meta name="description" content="Free News Forever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { headlines && <Headlines headlines={headlines} /> }
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const response = await fetch(
    `http://localhost:3000/v1/headlines/fetch?size=20`)

  return { 
    headlines: await response.json(),
  }
}

export default Home
