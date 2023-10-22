import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  )
}
