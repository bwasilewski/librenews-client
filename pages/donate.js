import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMatomo } from '@datapunt/matomo-tracker-react'

function Donate() {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView()
  }, [trackPageView])

  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | Donate</title>
        <meta name="description" content="LibreNews | Donate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Donations pay for server time and data access. Thank you so much for your contribution!</p>
				<Link href="https://liberapay.com/bwasilewski/donate" passHref>
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
