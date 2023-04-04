<script setup lang="ts">
import { useToggle } from '@vueuse/core'

type FavoriteItemKey = 'title' | 'description' | 'href'

type FavoriteItemValue = {
  name: string
  placeholder: string
  value: string
}

type FavoriteItem = Record<FavoriteItemKey, FavoriteItemValue>

definePageMeta({
  layout: 'default-layout',
  title: 'Favorite'
})

useHead({
  title: 'Favorite'
})

const FAVORITE_LOCAL_STORAGE_KEY = 'favorite_list'

const useEditIndex = (initValue: number = -1) => {
  const editIndex = ref<number>(initValue)
  const resetIndex = () => {
    editIndex.value = -1
  }
  const isEdit = () => editIndex.value > -1
  return { editIndex, resetIndex, isEdit }
}

const [showDialog, toggle] = useToggle<boolean>(false)

const { editIndex: currentEditIndex, resetIndex, isEdit } = useEditIndex(-1)

const formData = ref<FavoriteItem>({
  title: {
    name: '名称',
    placeholder: '请输入你要添加的网站的名称',
    value: ''
  },
  description: {
    name: '描述',
    placeholder: '请输入你要添加的网站的描述',
    value: ''
  },
  href: {
    name: '网址',
    placeholder: '请输入你要添加的网站的网址',
    value: ''
  }
})

const favoriteList = ref<Record<FavoriteItemKey, string>[]>()

const currentHoverIndex = ref<number>(-1) // 当前选中卡片

const clearFormData = () => {
  Object.keys(formData.value).forEach((key: string) => {
    formData.value[key as FavoriteItemKey].value = ''
  })
}

const trimFormData = (): Record<FavoriteItemKey, string> => {
  const { title, description, href } = formData.value
  return {
    title: title.value.trim(),
    description: description.value.trim(),
    href: href.value.trim()
  }
}

const submit = () => {
  const { title, description, href } = trimFormData()
  if (!title || !description || !href) {
    alert('输入框不能为空')
  } else {
    if (isEdit()) {
      editSite()
    } else {
      addSite()
    }
    toggle()
    clearFormData()
  }
}

const addSite = () => {
  const { title, description, href } = trimFormData()
  const listStorageValue = localStorage.getItem(FAVORITE_LOCAL_STORAGE_KEY)
  let list
  // 判断是否有 localStorage
  if (listStorageValue) {
    list = JSON.parse(listStorageValue)
    list.push({ title, description, href })
  } else {
    list = [{ title, description, href }]
  }
  asyncSetData(list)
}

const editSite = () => {
  const { title, description, href } = trimFormData()
  const listStorageValue = localStorage.getItem(FAVORITE_LOCAL_STORAGE_KEY)
  try {
    const list = JSON.parse(listStorageValue as string)
    list.splice(currentEditIndex.value, 1, { title, description, href })
    asyncSetData(list)
    resetIndex()
  } catch {
    // 考虑错误处理
  }
}
const handleClickAddBtn = () => {
  toggle()
  clearFormData()
  resetIndex()
}

const handleClickEditBtn = (data: Record<FavoriteItemKey, string>, index: number) => {
  toggle()
  Object.keys(data).forEach((key: string) => {
    formData.value[key as FavoriteItemKey].value = data[key as FavoriteItemKey]
  })
  currentEditIndex.value = index
}

const removeSite = (index: number) => {
  const listStorageValue = localStorage.getItem(FAVORITE_LOCAL_STORAGE_KEY)
  try {
    const list = JSON.parse(listStorageValue as string)
    list.splice(index, 1)
    asyncSetData(list)
  } catch {
    // 考虑错误处理
  }
}

const asyncSetData = (list: any) => {
  favoriteList.value = list
  localStorage.setItem(FAVORITE_LOCAL_STORAGE_KEY, JSON.stringify(list))
}

const onMouseEnter = (index: number) => {
  currentHoverIndex.value = index
}

const onMouseLeave = () => {
  currentHoverIndex.value = -1
}

onMounted(() => {
  const listStorageValue = localStorage.getItem(FAVORITE_LOCAL_STORAGE_KEY)
  try {
    if (listStorageValue) {
      favoriteList.value = JSON.parse(listStorageValue)
    } else {
      throw new Error()
    }
  } catch {
    favoriteList.value = []
  }
})
</script>

<template>
  <Collection @addWeb="() => handleClickAddBtn()" />
  <Popup v-model:state="showDialog">
    <div
      class="bg-base-100 fixed left-[50%] top-[50%] z-50 flex w-[500px] translate-y-[-50%] translate-x-[-50%] flex-col items-center space-y-4 rounded-lg p-4"
    >
      <span class="block text-2xl font-bold">添加站点</span>
      <div class="form-control flex flex-col space-y-4">
        <label
          class="input-group"
          v-for="(item, index) in formData"
          :key="index"
        >
          <span class="flex w-[70px] justify-center">{{ item.name }}</span>
          <input
            v-model="item.value"
            type="text"
            :placeholder="item.placeholder"
            class="w-[300px] rounded-md border-2 border-solid py-1 pl-2 focus:border-green-300 focus:outline-none"
          />
        </label>
      </div>
      <div class="flex space-x-8">
        <button
          class="btn btn-success"
          @click="submit"
        >
          确定
        </button>
        <button
          class="btn btn-neutral"
          @click="() => toggle()"
        >
          取消
        </button>
      </div>
    </div>
  </Popup>
  <div class="grid grid-cols-4 justify-items-center gap-8">
    <div
      class="card bg-base-100 relative inline-block w-full transition-shadow duration-300 hover:shadow-xl"
      v-for="(item, index) in favoriteList"
      :key="index"
      @mouseenter="() => onMouseEnter(index)"
      @mouseleave="() => onMouseLeave()"
    >
      <NuxtLink
        :to="item.href"
        target="_blank"
      >
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">{{ item.title }}</h2>
          <h2 class="card-title border-b-2" />
          <div class="text-center text-[#6b7280]">{{ item.description }}</div>
        </div>
      </NuxtLink>
      <div
        class="absolute bottom-2 left-0 right-0 m-auto flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-black text-white transition-all duration-300"
        :class="currentHoverIndex === index ? 'w-20 px-1 opacity-40' : 'w-0 opacity-0'"
      >
        <span
          class="pr-2"
          @click="handleClickEditBtn(item, index)"
        >
          修改
        </span>
        <span @click="removeSite(index)">删除</span>
      </div>
    </div>
  </div>
</template>
