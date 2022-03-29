import Banner from './banner'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<>
			<Banner />

			{children}

			<Footer />
		</>
	)
}