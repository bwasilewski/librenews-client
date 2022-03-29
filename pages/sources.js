import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home({ sources }) {
	console.log('Sources: ', sources)
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
          { sources.results.map(result => (
            <li key={result.id}>
              <a href={result.url}>{result.name}</a>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/v1/sources`)
  const json = await res.json()
  return { sources: json }
}

export default Home
