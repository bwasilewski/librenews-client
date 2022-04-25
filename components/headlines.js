import HeadlineItem from './headlineitem'

export default function Headlines ({ headlines }) {
	return (
		<>
			<h2>Latest Headlines</h2>
			<ul>
				{ headlines.map(headline => (
					<HeadlineItem 
						key={headline.id} 
						headline={headline}
					/>
				))}
			</ul>
		</>
	)
}