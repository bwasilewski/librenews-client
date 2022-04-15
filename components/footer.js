import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ul>
				<li>
					<a href="https://liberapay.com/bwasilewski/donate">
						<Image 
							alt="Donate using Liberapay" 
							src="https://liberapay.com/assets/widgets/donate.svg" 
							width={81} 
							height={30} 
						/>
					</a>
				</li>
				{/* <li>
					<Image src="https://img.shields.io/liberapay/goal/bwasilewski.svg?logo=liberapay" />
				</li> */}
				<li>
					<small>&copy; 2022 Benjamin Wasilewski</small>
				</li>
			</ul>
		</footer>
	)
}