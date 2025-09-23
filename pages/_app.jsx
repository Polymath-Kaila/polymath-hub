import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Evans Kaila — Mega Portfolio</title>
        <meta name="description" content="Evans Kaila — Developer, Mentor, Builder. Explore projects, teaching, achievements." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
