import Head from 'next/head'
import styles from '../../styles/Home.module.css'

function Categories({ categories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Categories</title>
        <meta name="description" content="LibreNews | Sources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Libre News</h1>
        <h2>Categories</h2>

        {/* <ul>
          { sources.map(result => (
            <li key={result.id}>
              <a href={result.url}>{result.name}</a>
            </li>
          ))}
        </ul> */}
      </main>

    </div>
  )
}

Categories.getInitialProps = async (ctx) => {
  // const res = await fetch(`${process.env.BACKEND_URL}/v1/categories/fetch`)
  // const json = await res.json()
  return { categories: [] }
}

export default Categories
