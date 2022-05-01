import useHeadlines from '../controllers/headlines'
import HeadlineItem from '../components/headlineitem'
import styles from '../styles/Categories.module.css'

export default function CategoryHeadlines ({ category }) {
	const { headlines, isLoading, isError } = useHeadlines(category)
	const capitalized = category.charAt(0).toUpperCase() + category.slice(1)
	return (
		<>
			<h3>{capitalized}</h3>
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