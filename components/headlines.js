import Link from 'next/link'
import styles from '../styles/Banner.module.css'
import moment from 'moment'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const handleClick = ev => {
	// console.log(ev)
	trackEvent({ category: 'headline', action: 'headline-click' })
}

const HeadlineItem = ({headline}) => {
	const { trackEvent } = useMatomo()

	return (
		<li>
			<a 
				onClick={handleClick} 
				title={headline.description} 
				href={headline.link} rel="noreferrer" target="_blank">{headline.title}
			</a>

			<small>
				<em>
					{moment(headline.pubDate).format('MMMM Do YYYY, h:mm:ss')}
				</em>
			</small>

			{ headline.category.map(category => (
				<small key={category}>[<Link href={`/category/${category}`}>{category}</Link>]</small>
			))}
		</li>
	)
}

export default function Headlines ({ headlines }) {
	return (
		<ul>
			{ headlines.map(headline => (
				<HeadlineItem 
					key={headline.id} 
					headline={headline}
				/>
			))}
		</ul>
	)
}