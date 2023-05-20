import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/blogpost.module.css'


const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <main className={`${styles.main} `}>
    <h1>Title of this page {slug}</h1>
        <div className={`${styles.container}`}>

     <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quia. Natus quae placeat pariatur dicta sapiente aut amet quisquam aperiam perferendis doloribus. Temporibus dolor libero nam delectus distinctio nulla quia cupiditate autem incidunt, doloremque vitae voluptatem, totam est eaque? Nulla voluptatum nisi cupiditate ut tenetur?</div>
    </div>
      </main>
  )
}

export default slug;