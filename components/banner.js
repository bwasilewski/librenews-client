import Link from 'next/link'
import styles from '../styles/Banner.module.css'

export default function Banner () {
	return (
		<nav className={styles.banner}>
			<Link href="/">LibreNews</Link>
			<Link href="/about">About</Link>
			<Link href="/sources">Sources</Link>
			<Link href="https://liberapay.com/bwasilewski/donate">Donate</Link>
		</nav>
	)
}