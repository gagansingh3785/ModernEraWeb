import type { NextPage } from 'next'
import Head from 'next/head'

import styles from  "../styles/home.module.scss"
import { Navbar, Intro, About, Projects } from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ModernEraWeb</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Navbar />
      </header>
      <section>
        <Intro />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>

    </div>
  )
}

export default Home
