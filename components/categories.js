import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Categories.module.css'
import HeadlineItem from './headlineitem'
import useSWR from 'swr'

const fetchURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/categories`

const fetchCategories = () => fetch(fetchURL)
	.then(res => res.json())

const useCategories = () => {
	const { data, error } = useSWR(fetchURL, fetchCategories)

	return {
		categories: data,
		isLoading: !error && !data,
		isError: error
	}
}

export default function Categories () {
	const { categories, isLoading, isError } = useCategories()

	const handleClick = async ev => {
		// const response = await fetchCategoryHeadlines(ev.target.innerText)
		// setCurrent(ev.target.innerText)
		// setItems(response)
	}

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
		</>
	)
}