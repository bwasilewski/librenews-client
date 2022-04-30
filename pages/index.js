import React, { useEffect } from 'react'
import Head from 'next/head'
import Headlines from '../components/headlines'
import TopStories from '../components/topstories'
import TopStory from '../components/topstory'
import styles from '../styles/Home.module.css'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import classNames from 'classnames'

function Home({ headlines, top, error }) {
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
          <div className={classNames(styles.grid_item, styles.grid_top_story)}>
            <h2>Top Stories</h2>
            <TopStory story={top[0]} />
          </div>
          <div className={classNames(styles.grid_item, styles.grid_headlines)}>
            { headlines && <Headlines headlines={headlines} />}
          </div>
          <div className={
            classNames(styles.grid_item, styles.grid_top_stories)}>
            <TopStories stories={top.slice(1, top.length)} />
          </div>
          <div className={classNames(styles.grid_item, styles.grid_categories)}>
            <p>Categories</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const headlineResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/fetch?size=10`)
  const topResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/top`)

  return { 
    props: {
      error: null,
      headlines: await headlineResponse.json(),
      top: await topResponse.json()
    }
  }
}

export default Home
