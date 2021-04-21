import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next js</h1>

      <Link href="/portfolio">
        <a>To my portfolios</a>
      </Link>
    </div>
  )
}
