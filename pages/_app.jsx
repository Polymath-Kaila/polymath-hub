import '@/styles/globals.css'
import PageTransitionWrapper from "@/components/PageTransitionWrapper"
import Head from 'next/head'

export default function App({ Component, pageProps, router }) {
  return (
    <PageTransitionWrapper route={router.route}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>polymath</title>
        <meta
          name="description"
          content="Evans Kaila — Developer, Mentor, Builder. Explore projects, teaching, achievements."
        />
      </Head>
      <Component {...pageProps} />
    </PageTransitionWrapper>
  )
}
