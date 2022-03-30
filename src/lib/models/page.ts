import type { HeroData } from './hero'

export type Aliado = {
    name?: string
    image: string
}

export type PageData = {
  name: string
  theme: {
    primary: string
    secondary: string
  }
  hero: HeroData
  aliados?: Aliado[]
}
