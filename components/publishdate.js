import moment from 'moment'

export default function PublishDate ({date, format}) {
	const def = format ? format : 'MMMM Do YYYY, h:mm:ss'
	return (
		<small>
			<em>
				{moment(date).format(def)}
			</em>
		</small>
	)
}