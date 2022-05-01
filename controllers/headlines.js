import useSWR from 'swr'

const fetchHeadlines = url => fetch(url)
	.then(res => res.json())

export default function useHeadlines (category) {
	const fetchURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/fetch?size=5&category=${category}`
	const { data, error } = useSWR(fetchURL, fetchHeadlines)

	return {
		headlines: data,
		isLoading: !error && !data,
		isError: error
	}
}