import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<small>
				<span>&copy; 2022</span>
				<Link href="https://benwas.com">Benjamin Wasilewski</Link>
				<span> | Contact Me</span>
			</small>
		</footer>
	)
}