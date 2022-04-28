import React, { useEffect } from 'react'
import Head from 'next/head'
import Headlines from '../components/headlines'
import TopStories from '../components/topstories'
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
        { error === null && (
          <div className={styles.grid}>
            <div className={classNames(styles.column_1, styles.column)}>
              { headlines && <Headlines headlines={headlines} />}
            </div>
            <div className={classNames(styles.column_2, styles.column)}>
              { top && (
                <>
                  <h2>Top Stories</h2>
                  <TopStories stories={top} />
                </>
              )}
            </div>
          </div>
        )}
        { error && (
          <p>There was an error, please refresh the page.</p>
        )}
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const headlineResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/fetch?size=10`)
    const topResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/top`)

    return { 
      error: null,
      headlines: await headlineResponse.json(),
      top: await topResponse.json()
    }
  } catch (error) {
      return {
        error: error,
        headlines: null,
        top: null,
      }
  }
}

export default Home
