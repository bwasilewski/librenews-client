import styles from '../styles/Home.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<a href="https://liberapay.com/bwasilewski/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" /></a>
			</div>
			<div>
				<small>&copy; 2022 Benjamin Wasilewski</small>
			</div>
		</footer>
	)
}