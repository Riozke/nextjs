import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> 
      </Head>

      <h1>Giphy Search App</h1>
    </div>
  )
}