import Layout from '../components/layout'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const inst = createInstance({
    urlBase: 'https://stats.librenews.org',
    siteId: 1,
    disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
    linkTracking: true, // optional, default value: true
  })

  return (
    <MatomoProvider value={inst}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MatomoProvider>
  )
}

export default MyApp
