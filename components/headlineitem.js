import Link from 'next/link'
import moment from 'moment'
import { useMatomo } from '@datapunt/matomo-tracker-react'

export default function HeadlineItem ({headline}) {
	const { trackEvent } = useMatomo()

	const handleClick = ev => {
		// console.log(ev)
		trackEvent({ category: 'headline', action: 'headline-click' })
	}

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