import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>Ninja List | Home</Head>
      <meta name="keywords" content="ninjas" />
    <div>

      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>hello my self prateek kumar singh</p>
      <Link href="/ninja"><a className={styles.btn}>All Ninjas List</a></Link>

    </div>
    </>
    
  )
}
