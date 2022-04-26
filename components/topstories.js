import Link from 'next/link'
import HeadlineItem from './headlineitem'
import styles from '../styles/TopStories.module.css'

export default function TopStories ({stories}) {
	return (
		<div className={styles.grid}>
			<div className={styles.column_1}>
				<img src={stories[0].image_url} />
				<h3>{stories[0].title}</h3>
			</div>
			<div className={styles.column_2}>
				<ul>
					{ stories.slice(1).map(story => (
						<HeadlineItem 
						 	key={story.id}
							headline={story} />
					)) }
				</ul>
			</div>
		</div>
	)
}