import Header from '@/components/Header/Header'
import Dashboard from '@/components/pages/Dashboard'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Dashboard />
    </main>
  )
}
