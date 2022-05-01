import Link from 'next/link'
import PublishDate from './publishdate'

export default function HeadlineItem ({headline, showCategory, showSource}) {
	const {
		category,
		description,
		link,
		pubDate,
		source_id,
		title,
	} = headline

	return (
		<li>
			<a 
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