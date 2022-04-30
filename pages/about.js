import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import { useMatomo } from '@datapunt/matomo-tracker-react'

function About() {
  const { trackPageView } = useMatomo()

  useEffect(() => {
    trackPageView()
  }, [trackPageView])

  return (
    <div className={styles.container}>
      <Head>
        <title>LibreNews | About</title>
        <meta name="description" content="LibreNews | About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1>What is LibreNews?</h1>

          <p>&quot;Libre&quot; is a term borrowed from French and Latin languages, meaning &quot;at liberty, free, or unrestricted&quot;. The goal of LibreNews is to provide a reliable source for the latest breaking news headlines without any unnecessary obstacles or hinderances.</p>

          <p>LibreNews aims to be the fastest and most streamlined method for finding this information.</p>
        </section>
        <section>
          <h2>Who Made This?</h2>
          <p>LibreNews.org is a personal project owned and maintained by myself, <Link href="https://benwas.com">Benjamin Wasilewski</Link>, a software engineer based in Southeastern Wisconsin. You can <Link href="mailto:benwasilewski@gmail.com">email me</Link> or check out my other work on <Link href="https://github.com/bwasilewski">GitHub</Link>.</p>
        </section>

        <Link href="https://www.buymeacoffee.com/benwasilewski">Buy me a coffee</Link>
      </main>

    </div>
  )
}

export default About
