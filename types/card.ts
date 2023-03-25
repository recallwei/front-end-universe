export type Card = {
  title: string
  description?: string
  href?: string
}

export type Group = {
  title: string
  children: Card[]
}
