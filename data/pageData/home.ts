import type { BaseCard, BaseCardGroup } from '~/types'

import type { BaseLabel } from '~/types'

const labelSrcPrefix = '/_nuxt/assets/icons/'

const getLabelSrc = (fileName: string) => labelSrcPrefix + fileName + '.png'

export const labelList: BaseLabel[] = [
  {
    href: 'https://react.dev/',
    text: 'React',
    src: getLabelSrc('react')
  },
  {
    href: 'https://vuejs.org/',
    text: 'Vue',
    src: getLabelSrc('vue')
  },
  {
    href: 'https://vitejs.dev/',
    text: 'Vite',
    src: getLabelSrc('vite')
  },
  {
    href: 'https://docusaurus.io/',
    text: 'Docusaurus',
    src: getLabelSrc('docusaurus')
  },
  {
    href: 'https://www.typescriptlang.org/',
    text: 'TypeScript',
    src: getLabelSrc('typescript')
  },
  {
    href: 'https://sass-lang.com/',
    text: 'Sass',
    src: getLabelSrc('sass')
  }
]

export const groupList: BaseCardGroup<BaseCard>[] = [
  {
    title: '技术博客',
    src: '/_nuxt/assets/images/planet.png',
    children: [
      {
        title: 'dev.to',
        description: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术资讯，提高专业能力的好地方',
        href: 'https://dev.to/'
      },
      {
        title: '掘金',
        description: '中文技术社区',
        href: 'https://juejin.cn/'
      }
    ]
  },
  {
    title: '技术团队',
    src: '/_nuxt/assets/images/planet.png',
    children: [
      {
        title: 'dev.to',
        description: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术资讯，提高专业能力的好地方',
        href: 'https://dev.to/'
      },
      {
        title: '掘金',
        description: '中文技术社区',
        href: 'https://juejin.cn/'
      }
    ]
  }
]
