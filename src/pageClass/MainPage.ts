import { BlockContent } from '@/types/types'
import { getEntertaments, getRestaurantes, getTodos } from '@/server/api'

export class MainPage {
  restaurants: BlockContent[] = []
  entertaments: BlockContent[] = []
  todos: BlockContent[] = []

  constructor() {
    this.getCMSPageServerSideProps = this.getCMSPageServerSideProps.bind(this)
  }

  async getCMSPageServerSideProps() {
    const data = await this.getData()
    if (data) {
      return {
        props: {
          data,
        },
      }
    }
    return { notFound: true }
  }

  async getData() {
    const rest = getRestaurantes()
    const entr = getEntertaments()
    const todo = getTodos()

    const [dataRest, dataEntr, dataTodo] = await Promise.all([rest, entr, todo])

    if (dataRest && dataEntr && dataTodo) {
      return {
        dataRest,
        dataEntr,
        dataTodo,
      }
    }
  }

  setData(data: {
    dataRest: BlockContent[]
    dataEntr: BlockContent[]
    dataTodo: BlockContent[]
  }) {
    const { dataRest, dataEntr, dataTodo } = data
    this.restaurants = dataRest
    this.entertaments = dataEntr
    this.todos = dataTodo
  }
}
