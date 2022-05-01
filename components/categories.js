import { useEffect, useState } from 'react'
import CategoryHeadlines from './categoryHeadlines'
import useCategories from '../controllers/categories'
import styles from '../styles/Categories.module.css'

export default function Categories () {
	const [current, setCurrent] = useState(null)
	const { categories, isLoading, isError } = useCategories()

	useEffect(() => {
		if ( categories ) {
			setCurrent(categories[0])
		}
	}, [categories])

	const handleClick = async ev => setCurrent(ev.target.innerText)

	return (
		<>
		 	<h2>Categories</h2>
			{ isLoading && <h3>Loading...</h3> }
			{ isError && <h3>ERROR</h3> }
			{ categories && (
				<>
					<ul className={styles.category_list}>
						{ categories.map(category => (
							<li key={category}>
								<button onClick={handleClick}>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</button>
							</li>
						))}
					</ul>
					<CategoryHeadlines category={current} />
				</>
			)}
		</>
	)
}