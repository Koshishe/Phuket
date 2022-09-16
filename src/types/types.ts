export type Filter = string[]

export type Socials = {
  instagram?: string
  facebook?: string
  twitter?: string
  web?: string
}

export type BlockContent = {
  id: string
  img: string[]
  tags: string[]
  title: string
  mapLink: string
  rating: number
  socials?: Socials
  moreInfo?: string
  workTime?: string
}
export type ColorType = 'pinkGr' | 'blueGr' | 'greenGr'
