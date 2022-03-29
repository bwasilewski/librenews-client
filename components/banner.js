import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Banner () {
	return (
		<nav className={styles.banner}>
			<Link href="/">LibreNews</Link>
			<Link href="/about">About</Link>
			<Link href="https://liberapay.com/bwasilewski/donate">Donate</Link>
		</nav>
	)
}