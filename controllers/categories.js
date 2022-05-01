import useSWR from 'swr'

const fetchCategories = url => fetch(url)
	.then(res => res.json())

export default function useCategories () {
	const fetchURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/headlines/categories`
	const { data, error } = useSWR(fetchURL, fetchCategories)

	return {
		categories: data,
		isLoading: !error && !data,
		isError: error
	}
}