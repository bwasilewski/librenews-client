import Link from 'next/link'
import PublishDate from './publishdate'

export default function TopStory ({story}) {
	const {
		link,
		image_url,
		title,
		source_id,
		pub_date,
	} = story

	return (
		<>
			<a href={link} target="_blank" rel="noreferrer">
				<img src={image_url} />
				<h3>{title}</h3>
			</a>
			<PublishDate date={pub_date} /> <small>[{source_id}]</small> 
		</>
	)
}