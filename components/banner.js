import Link from 'next/link'
import styles from '../styles/Banner.module.css'

export default function Banner () {
	return (
		<nav className={styles.banner}>
			<ul>
				<li>
					<Link prefetch={true} href="/">LibreNews</Link>
				</li>
				<li>
					<small><em>Free News Forever</em></small>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://liberapay.com/bwasilewski/donate">Donate</a>
				</li>
			</ul>
			<ul className={styles.bannerMobile}>
				<li>
					<a target="_blank" rel="noreferrer" href="https://liberapay.com/bwasilewski/donate">Donate</a>
				</li>
			</ul>
		</nav>
	)
}