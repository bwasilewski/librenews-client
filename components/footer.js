import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className={styles.footer}>
			<small>
				&copy; {year}
				<Link href="https://benwas.com">Benjamin Wasilewski</Link>
			</small>
		</footer>
	)
}