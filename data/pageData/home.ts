import type { BaseCard, BaseCardGroup } from '~/types'

import type { BaseLabel } from '~/types'

const LABEL_SRC_PREFIX = '/icons/label/'

const getLabelSrc = (fileName: string) => `${LABEL_SRC_PREFIX}${fileName}.png`

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

const GROUP_SRC_PREFIX = '/icons/group/'

const getGroupSrc = (fileName: string) => `${GROUP_SRC_PREFIX}${fileName}.png`

export const groupList: BaseCardGroup<BaseCard>[] = [
  {
    title: 'UI 框架',
    src: getGroupSrc('ui-framework'),
    children: [
      {
        title: 'Element UI',
        href: 'https://element-plus.org/zh-CN/'
      },
      {
        title: 'Naive UI',
        href: 'https://www.naiveui.com/'
      },
      {
        title: 'Ant Design 5 - React',
        href: 'https://ant.design/'
      },
      {
        title: 'Daisy UI',
        href: 'https://daisyui.com/'
      }
    ]
  },
  {
    title: '技术社区',
    src: getGroupSrc('tech-community'),
    children: [
      {
        title: 'Stack Overflow',
        description: '一个与程序相关的 IT 技术问答网站',
        href: 'https://stackoverflow.com/'
      },
      {
        title: 'DEV',
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
    title: '技术博客',
    src: getGroupSrc('tech-blog'),
    children: [
      {
        title: 'Anthony Fu',
        description: 'Vue & Nuxt & Vite 核心团队成员 Anthony Fu 的博客',
        href: 'https://antfu.me/posts'
      },
      {
        title: 'TkDodo',
        description: 'TkDodo 的与 React 相关的博客',
        href: 'https://tkdodo.eu/blog/all'
      }
    ]
  },
  {
    title: '图标站点',
    src: getGroupSrc('icon-site'),
    children: [
      {
        title: 'xicons',
        description: 'React & Vue 图标库',
        href: 'https://www.xicons.org/'
      }
    ]
  },
  {
    title: '软件管理',
    src: getGroupSrc('icon-site'),
    children: [
      {
        title: 'Semantic Versioning',
        href: 'https://semver.org/'
      }
    ]
  },
  {
    title: '动画相关',
    src: getGroupSrc('icon-site'),
    children: [
      {
        title: 'React Flow',
        description: 'React 流程图',
        href: 'https://reactflow.dev/'
      },
      {
        title: 'Vue Flow',
        description: 'Vue 流程图',
        href: 'https://vueflow.dev/'
      },
      {
        title: '中国地图数据',
        description: '生成用于 ECharts, D3 等图表库的 GeoJSON',
        href: 'https://geojson.cn/'
      },
      {
        title: 'mo.js',
        description: '',
        href: 'https://mojs.github.io/'
      }
    ]
  },
  {
    title: '工具库',
    src: getGroupSrc('icon-site'),
    children: [
      {
        title: 'usehooks-ts',
        description: '',
        href: 'https://usehooks-ts.com/'
      }
    ]
  },
  {
    title: '技术工具',
    src: getGroupSrc('icon-site'),
    children: [
      {
        title: 'Developer Roadmaps',
        description: '开发者线路图',
        href: 'https://roadmap.sh/'
      }
    ]
  }
]
