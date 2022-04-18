import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useMatomo } from '@datapunt/matomo-tracker-react'
function Sources({ sources }) {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView()
  }, [trackPageView])

  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Sources</title>
        <meta name="description" content="LibreNews | Sources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Libre News</h1>
        <h2>Sources</h2>

        <ul>
          { sources.map(result => (
            <li key={result.id}>
              <a href={result.url}>{result.name}</a>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

Sources.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/sources/fetch`)
  const json = await res.json()
  return { sources: json }
}

export default Sources
