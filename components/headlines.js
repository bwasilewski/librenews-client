import Link from 'next/link'
import styles from '../styles/Banner.module.css'

const handleClick = ev => {
	console.log(ev)
}

export default function Headlines ({ items }) {
	return (
		<ul>
			{ items.map(result => (
				<li key={result.id}>
					<a 
						onClick={handleClick} 
						title={result.description} 
						href={result.link} target="_blank">{result.title}
					</a>

					<small>
						<em> <a href="">{result.source_id}</a> </em>
					</small>

					{ result.category.map(category => (
						<small key={category}>[<Link href={`/category/${category}`}>{category}</Link>]</small>
					))}
				</li>
			))}
		</ul>
	)
}