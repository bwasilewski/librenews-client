import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Donate() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Donate</title>
        <meta name="description" content="LibreNews | Donate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Libre News</h1>
        <h2>Donate</h2>

				<Link href="https://liberapay.com/bwasilewski/donate">
					<Image 
						alt="Donate using Liberapay" 
						src="https://liberapay.com/assets/widgets/donate.svg" 
						width={81} 
						height={30} 
					/>
				</Link>
      </main>

    </div>
  )
}

export default Donate
