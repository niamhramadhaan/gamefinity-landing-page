import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustWall from '../components/TrustWall'
import Toolkit from '../components/Toolkit'
import GrowthSolutions from '../components/GrowthSolutions'
import NewsTeaser from '../components/NewsTeaser'
import Story from '../components/Story'
import Partner from '../components/Partner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamefinity - Built with players. Built for platforms.</title>
        <meta name="description" content="One entertainment engine for any app to embed: games, drama, and connection. The same content platform that grew Indonesia's most engaged gaming community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="https://biz.gamefinity.id/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#042C53" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gamefinity - Built with players. Built for platforms." />
        <meta property="og:description" content="One entertainment engine for any app to embed: games, drama, and connection." />
        <meta property="og:image" content="https://picsum.photos/seed/gamefinity-og/1200/630" />
        <meta property="og:url" content="https://gamefinity.id" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gamefinity - Built with players. Built for platforms." />
        <meta name="twitter:description" content="One entertainment engine for any app to embed: games, drama, and connection." />
        <meta name="twitter:image" content="https://picsum.photos/seed/gamefinity-og/1200/630" />
      </Head>

      <a href="#main" className="skip-link">Skip to content</a>

      <Navbar />
      <main id="main">
        <Hero />
        <TrustWall />
        <Story />
        <Toolkit />
        <GrowthSolutions />
        <NewsTeaser />
        <Partner />
      </main>
      <Footer />
    </>
  )
}
