import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Plate } from '@/components/Plate/Plate'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Пхукет - нас объединяет виза</title>
        <meta name="description" content="Мини путеводитель по Пхукету" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Plate />
      </main>

      <footer />
    </>
  )
}

export default Home
