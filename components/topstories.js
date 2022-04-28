import Link from 'next/link'
import HeadlineItem from './headlineitem'
import styles from '../styles/TopStories.module.css'

export default function TopStories ({stories}) {
	return (
		<div className={styles.top_stories}>
			<ul>
				{ stories.slice(1).map(story => (
					<HeadlineItem 
						key={story.id}
						headline={story}
						showSource={true} 
					/>
				)) }
			</ul>
		</div>
	)
}