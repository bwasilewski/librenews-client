import Link from 'next/link'
import PublishDate from './publishdate'
import { useMatomo } from '@datapunt/matomo-tracker-react'

export default function HeadlineItem ({headline, showCategory, showSource}) {
	const { trackEvent } = useMatomo()
	const {
		category,
		description,
		link,
		pubDate,
		source_id,
		title,
	} = headline

	const handleClick = () => trackEvent({ 
		category: 'headline', 
		action: 'headline-click' 
	})

	return (
		<li>
			<a 
				onClick={handleClick} 
				title={description} 
				href={link} rel="noreferrer" target="_blank">{title}
			</a>

			<PublishDate date={pubDate} format={'MMMM Do YYYY, h:mm:ss'} />

			{ showSource && (
				<small>
					<em>
						[{source_id}]
					</em>
				</small>
			)}

			{ showCategory && category.map(cat => (
				<small key={cat}>[<Link href={`/category/${cat}`}>{cat}</Link>]</small>
			))}
		</li>
	)
}