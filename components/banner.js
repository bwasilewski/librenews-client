import Link from 'next/link'
import styles from '../styles/Banner.module.css'

export default function Banner () {
	return (
		<nav className={styles.banner}>
			<ul>
				<li>
					<Link href="/">LibreNews</Link> //
				</li>
				<li>
					<Link href="/categories">Categories</Link> //
				</li>
				<li>
					<Link href="/sources">Sources</Link> //
				</li>
				<li>
					<Link href="/about">About</Link> //
				</li>
				<li>
					<Link href="https://liberapay.com/bwasilewski/donate">Donate</Link>
				</li>
			</ul>
		</nav>
	)
}