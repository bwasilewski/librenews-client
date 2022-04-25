import React, { useEffect } from 'react'
import Head from 'next/head'
import Headlines from '../components/headlines'
import TopStories from '../components/topstories'
import styles from '../styles/Home.module.css'
import { useMatomo } from '@datapunt/matomo-tracker-react'

function Home({ headlines, top }) {
  const { trackPageView } = useMatomo()

  useEffect(() => {
    trackPageView()
  }, [trackPageView])

  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Free News Forever</title>
        <meta name="description" content="Free News Forever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.column_1}>
            <Headlines headlines={headlines} />
          </div>
          <div className={styles.column_2}>
            <h2>Top Stories</h2>
            <TopStories stories={top} />
          </div>
        </div>
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const headlineResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/fetch?size=10`)
  const topResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/top`)

  return { 
    headlines: await headlineResponse.json(),
    top: await topResponse.json()
  }
}

export default Home
