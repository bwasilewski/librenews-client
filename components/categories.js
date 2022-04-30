import Link from 'next/link'
import styles from '../styles/Categories.module.css'
import HeadlineItem from './headlineitem'
import useSWR from 'swr'

const headlinesURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/fetch?category=top&size=5`
const categoriesURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/categories`

const fetchHeadlines = () => fetch(headlinesURL)
	.then(res => res.json())

const fetchCategories = () => fetch(categoriesURL)
	.then(res => res.json())

const useHeadlines = () => {
	const { data, error } = useSWR(headlinesURL, fetchHeadlines)

	return {
		headlines: data,
		isLoading: !error && !data,
		isError: error
	}
}

const useCategories = () => {
	const { data, error } = useSWR(categoriesURL, fetchCategories)

	return {
		categories: data,
		isLoading: !error && !data,
		isError: error
	}
}

export default function Categories () {
	const {categories, isLoading, isError } = useCategories()
	const handleClick = async ev => {
		// const response = await fetchCategoryHeadlines(ev.target.innerText)
		// setCurrent(ev.target.innerText)
		// setItems(response)
	}

	// if ( isLoading ) return <h3>Loading...</h3>
	// if ( isError ) return <h3>ERROR!</h3>
	return (
		<>
		 	<h2>Categories</h2>
			{ isLoading && <h3>Loading...</h3> }
			{ isError && <h3>ERROR</h3> }
			{ categories && (
				<ul className={styles.category_list}>
					{ categories.map(category => (
						<li key={category}>
							<button onClick={handleClick}>
								{category}
							</button>
						</li>
					))}
				</ul>
			)}
			{/* <h2>{current}</h2>
			{ items.map(headline => (
				<HeadlineItem 
					key={headline.id}
					headline={headline} 
					showCategory={false} 
					showSource={true} 
				/>
			))}
			<Link href={`/category/${current}`}>
				<a>
					More in {current}
				</a>
			</Link> */}
		</>
	)
}