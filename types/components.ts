export interface BaseCard {
  title: string
  description?: string
  href?: string
}

export interface BaseCardGroup<T> {
  title: string
  src: string
  children: T[]
}

export interface BaseLabel {
  href: string
  src: string
  text: string
}

export interface CustomLabel extends BaseLabel {
  color?: string
  bgColor?: string
}

export interface control {
  name: string
  placeholder: string
}
export type Popup<T> = {
  title: string
  children: T[]
  confirm?: string
  cancel?: string
}
