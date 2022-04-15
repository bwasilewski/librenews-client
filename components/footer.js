import Signup from './signup'
import styles from '../styles/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Signup />
			<ul>
				<li>
					<a href="https://liberapay.com/bwasilewski/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" /></a>
				</li>
				<li>
					<img src="https://img.shields.io/liberapay/goal/bwasilewski.svg?logo=liberapay"></img>
				</li>
				<li>
					<small>&copy; 2022 Benjamin Wasilewski</small>
				</li>
			</ul>
		</footer>
	)
}