import React from 'react'
import Head from 'next/head'
import { Plate } from '@/components/Plate/Plate'
import { Food } from '@/components/Food/Food'
import { Entertaments } from '@/components/Entertaments/Entertaments'
import { Todo } from '@/components/Todo/Todo'
import { Footer } from '@/components/Footer/Footer'
import { MainPage } from '@/pageClass/MainPage'
import { BlockContent } from '@/types/types'
import { addEntertament, addFood, addTodo } from '@/state/actions'
import { useDispatch } from 'react-redux'

const page = new MainPage()

type Props = {
  data: {
    dataRest: BlockContent[]
    dataEntr: BlockContent[]
    dataTodo: BlockContent[]
  }
}

const Home = (props: Props) => {
  page.setData(props.data)

  const dispatch = useDispatch()
  dispatch(addFood(props.data.dataRest))
  dispatch(addEntertament(props.data.dataEntr))
  dispatch(addTodo(props.data.dataTodo))
  return (
    <>
      <Head>
        <title>Пхукет - нас объединяет виза</title>
        <meta name="description" content="Мини путеводитель по Пхукету" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Plate />
        <Food />
        <Entertaments />
        <Todo />
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps = page.getCMSPageServerSideProps

export default Home
