import Head from 'next/head'
import Headlines from '../components/headlines'
import styles from '../styles/Home.module.css'
import { useMatomo } from '@datapunt/matomo-tracker-react'

function Home({ headlines, sources }) {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
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
        { headlines && <Headlines headlines={headlines} /> }
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/fetch?size=20`)

  return { 
    headlines: await response.json(),
  }
}

export default Home
