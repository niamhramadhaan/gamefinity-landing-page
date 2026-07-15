import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Toolkit from '../components/Toolkit'
// import GrowthSolutions from '../components/GrowthSolutions'
import NewsTeaser from '../components/NewsTeaser'
import GamefinityStore from '../components/GamefinityStore'
import Story from '../components/Story'
import Partner from '../components/Partner'
import FloatingBlog from '../components/FloatingBlog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamefinity: Gaming Media &amp; Creative Lab</title>
        <meta name="description" content="Games, drama, and live chat — one embeddable entertainment engine for any app. Built by a gaming media and creative lab powering communities across Asia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#042C53" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gamefinity: Gaming Media & Creative Lab" />
        <meta property="og:description" content="Games, drama, and live chat — one embeddable entertainment engine for any app." />
        <meta property="og:image" content="https://picsum.photos/seed/gamefinity-og/1200/630" />
        <meta property="og:url" content="https://gamefinity.id" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gamefinity: Gaming Media & Creative Lab" />
        <meta name="twitter:description" content="Games, drama, and live chat — one embeddable entertainment engine for any app." />
        <meta name="twitter:image" content="https://picsum.photos/seed/gamefinity-og/1200/630" />
      </Head>

      <a href="#main" className="skip-link">Skip to content</a>

      <Navbar />
      <main id="main">
        <Hero />
        <Toolkit />
        <GamefinityStore />
        <NewsTeaser />
        <Story />
        {/* <GrowthSolutions /> */}
        <Partner />
      </main>
      <FloatingBlog />
      <Footer />
    </>
  )
}
