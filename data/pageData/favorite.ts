import type { Popup, control } from '~/types'

export const popupList: Popup<control> = {
  title: '添加站点',
  children: [
    {
      name: '名称',
      placeholder: '请输入你要添加的网站的名称',
    },
    {
      name: '描述',
      placeholder: '请输入你要添加的网站的描述',
    },
    {
      name: '网址',
      placeholder: '请输入你要添加的网站的网址',
    },
  ],
}
