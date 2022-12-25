import Image from 'next/image'
import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from  "../styles/home.module.scss"
import { Navbar, Intro, About, Projects, ContactForm, Footer, SocialMediaIcons, Modal } from '../components'
import img from "../public/background.jpg"

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>ModernEraWeb</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <Image src={img} alt="background-image" fill/>
      </div>
      <button onClick={() => setShowModal(true)}>Click me</button>
      <Modal show={showModal} />
      <header className={styles.header}>
        <Navbar />
      </header>
      <section className={styles.section}>
        <Intro />
      </section>
      <section className={styles.section}>
        <About />
      </section>
      <section className={styles.section}>
        <Projects />
      </section>
      <section className={styles.section}>
        <ContactForm />
      </section>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      <div className={styles['icons-container']}>
        <SocialMediaIcons />
      </div>
    </>
  )
}

export default Home
