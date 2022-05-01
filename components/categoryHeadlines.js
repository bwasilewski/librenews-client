import useHeadlines from '../controllers/headlines'
import HeadlineItem from '../components/headlineitem'
import styles from '../styles/Categories.module.css'

export default function CategoryHeadlines ({ category }) {
	const { headlines, isLoading, isError } = useHeadlines(category)
	return (
		<>
			<h3>{category}</h3>
			{ isLoading && <h3>Loading...</h3> }
			{ isError && <h3>ERROR</h3> }
			{ headlines && (
				<div className={styles.category_headlines}>
					{ headlines && headlines.map(headline => 
						<HeadlineItem 
							headline={headline} 
							showCategory={false} 
							showSource={true} 
						/>
					)}
				</div>
			)}
		</>
	)
}