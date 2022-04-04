import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'

function Category ({ headlines }) {
	const router = useRouter()
	const { id } = router.query
	
	return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | { id }</title>
        <meta name="description" content="LibreNews | Sources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Libre News</h1>
        <h2>{ id }</h2>

        <ul>
          { headlines.map(result => (
            <li key={result.id}>
              <a href={result.link}>{result.title}</a>
            </li>
          ))}
        </ul>
      </main>

    </div>
	)
}

Category.getInitialProps = async (ctx) => {
  // const res = await fetch(`${process.env.BACKEND_URL}/v1/headlines/fetch?limit=20&category=${id}`)
  // const json = await res.json()
  // return { headlines: json }
}

export default Category