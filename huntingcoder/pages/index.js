import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, huntingcoder blog, huntingcoder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul> 
          <Link id='link' href='/home'><li>Home</li></Link>
          <Link id='link' href='/about'><li>About</li></Link>
          <Link id='link' href='/blog'><li>Blog</li></Link>
          <Link id='link' href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>

      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.center}>
          <h1>Hunting coder</h1>
        </div>
          <p>A blog for hunting coders by a hunting coder</p>

        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blogitem">
           <h3>how to learn javascript?</h3>
           <p>javascript is the language used to design logic for the web </p> 
          </div>
        </div>
        <div className="blogs">
          <div className="blogitem">
           <h3>how to learn javascript?</h3>
           <p>javascript is the language used to design logic for the web </p> 
          </div>
        </div>
        <div className="blogs">
          <div className="blogitem">
           <h3>how to learn javascript?</h3>
           <p>javascript is the language used to design logic for the web </p> 
          </div>
        </div>
       
      </main>
    </>
  )
}
