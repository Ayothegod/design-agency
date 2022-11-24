import Head from 'next/head'
import About from '../components/About'
import Features from '../components/Features'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import More from '../components/More'
import News from '../components/News'
import Services from '../components/Services'
import Works from '../components/Works'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='text-white'>
      <Head>
        <title>Web Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-4'>
        <Header/>
        <LandingPage/>
        <Features/>
        <Services/>
        <Works/>
        <About/>
        <More/>
        <News/>
      </div>
       <Footer/>
    </div>
  )
}
