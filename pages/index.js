import Head from 'next/head'
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
        <h1 className={styles.title}>Libre News</h1>
        <h2>Free News Forever</h2>

        <ul>
          { headlines.map(result => (
            <li key={result.link}>
              <a title={result.description} href={result.link}>{result.title}</a>
              <small><em> <a href="">{result.source_id}</a> </em></small>
              { result.category.map(category => (
                <small key={category}>[<a href="">{category}</a>]</small>
              ))}
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/v1/headlines`)
  const json = await res.json()
  return { headlines: json }
}

export default Home
