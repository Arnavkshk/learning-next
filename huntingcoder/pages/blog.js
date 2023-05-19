import React from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <div className="blogs">
          <main className={`${styles.main} `}>
  
          <div className={`${styles.blogitem}`}>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={`${styles.blogitemh3}`}>how to learn javascript?</h3>
          </Link>
           <p>javascript is the language used to design logic for the web </p> 
          </div>

          <div className={`${styles.blogitem}`}>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={`${styles.blogitemh3}`}>how to learn javascript?</h3>
          </Link>
           <p>javascript is the language used to design logic for the web </p> 
          </div>
          
          <div className={`${styles.blogitem}`}>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={`${styles.blogitemh3}`}>how to learn javascript?</h3>
          </Link>
           <p>javascript is the language used to design logic for the web </p> 
          </div>
          
        </main>
        </div>
    </div>
  )
}

export default Blog;
