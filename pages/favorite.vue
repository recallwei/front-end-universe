<script setup lang="ts">
import { popupList } from '~/data'
definePageMeta({
  layout: 'default-layout',
  title: 'Favorite',
})

useHead({
  title: 'Favorite',
})

const siteInfo = ref()
let open = ref<boolean>()
let localStorageInfo = ref()
let currentEditIndex = ref()
const myCardInfo = computed(() => {
  return localStorageInfo.value
})

onMounted(() => {
  if (localStorage.info || 0) {
    localStorageInfo.value = JSON.parse(localStorage.info)
  } else {
    localStorageInfo.value = []
  }
})

function superAddWeb() {
  open.value = true
}

function confirm() {
  if (
    siteInfo.value[0].value.trim() == '' ||
    siteInfo.value[1].value.trim() == '' ||
    siteInfo.value[2].value.trim() == ''
  ) {
    alert('输入框不能为空')
  } else {
    if (currentEditIndex == undefined) {
      addSite()
    } else {
      if (currentEditIndex.value != -1) {
        editSite()
      } else {
        addSite()
      }
    }
    open.value = false
    siteInfo.value[0].value = ''
    siteInfo.value[1].value = ''
    siteInfo.value[2].value = ''
  }
}

function cancel() {
  open.value = false
}

function addSite() {
  const title: string = siteInfo.value[0].value.trim()
  const description: string = siteInfo.value[1].value.trim()
  const href: string = siteInfo.value[2].value.trim()
  if (localStorage.info || 0) {
    let info = localStorage['info']
    let myCard = JSON.parse(info) //转换为json
    myCard.push({ title, description, href })
    localStorage.info = JSON.stringify(myCard)
    localStorageInfo.value = JSON.parse(localStorage.info)
  } else {
    localStorage.info = []
    let obj = { title, description, href }
    localStorage.info = '[' + JSON.stringify(obj) + ']' //转换为字符串
    localStorageInfo.value = JSON.parse(localStorage.info)
  }
}

function editSite() {
  const title: string = siteInfo.value[0].value.trim()
  const description: string = siteInfo.value[1].value.trim()
  const href: string = siteInfo.value[2].value.trim()
  let info = localStorage['info']
  let myCard = JSON.parse(info) //转换为json
  myCard.splice(currentEditIndex.value, 1, { title, description, href })
  localStorage.info = JSON.stringify(myCard)
  localStorageInfo.value = JSON.parse(localStorage.info)
  currentEditIndex.value = -1
}

function editBtn(index: Number) {
  open.value = true
  let info = localStorage['info']
  let myCard = JSON.parse(info) //转换为json
  siteInfo.value[0].value = myCard[index + ''].title
  siteInfo.value[1].value = myCard[index + ''].description
  siteInfo.value[2].value = myCard[index + ''].href
  currentEditIndex.value = index
  console.log(index)
}

function removeSite(index: Number) {
  let info = localStorage['info']
  let myCard = JSON.parse(info) //转换为json
  myCard.splice(index, 1)
  localStorage.info = JSON.stringify(myCard)
  localStorageInfo.value = JSON.parse(localStorage.info)
}
</script>

<template>
  <Collection @addWeb="superAddWeb" />
  <Popup v-model:state="open as boolean">
    <div
      class="bg-base-100 flex w-[500px] flex-col items-center space-y-4 rounded-lg p-4 fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-50"
    >
      <span class="block text-2xl font-bold">{{ popupList.title }}</span>
      <div class="form-control flex flex-col space-y-4">
        <label
          class="input-group"
          v-for="(item, index) in popupList.children"
          :key="index"
        >
          <span class="flex w-[70px] justify-center">{{ item.name }}</span>
          <input
            ref="siteInfo"
            type="text"
            :placeholder="item.placeholder"
            class="w-[300px] rounded-md border-2 border-solid py-1 pl-2 focus:border-green-300 focus:outline-none"
          />
        </label>
      </div>
      <div class="flex space-x-8">
        <button class="btn btn-success" @click="confirm">
          {{ popupList.confirm || '确定' }}
        </button>
        <button class="btn btn-neutral" @click="cancel">
          {{ popupList.cancel || '取消' }}
        </button>
      </div>
    </div>
  </Popup>
  <div class="grid grid-cols-4 justify-items-center gap-8">
    <div
      class="card bg-base-100 inline-block w-full transition-shadow duration-300 hover:shadow-xl relative"
      v-for="(item, index) in myCardInfo"
      :key="index"
    >
      <NuxtLink :to="item.href" target="_blank">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">{{ item.title }}</h2>
          <h2 class="card-title border-b-2" />
          <div class="text-center text-[#6b7280]">{{ item.description }}</div>
        </div>
      </NuxtLink>
      <div
        class="absolute bottom-2 left-7 text-white bg-black opacity-40 rounded-md px-1 cursor-pointer"
      >
        <span class="pr-2" @click="editBtn(index)">修改</span>
        <span @click="removeSite(index)">删除</span>
      </div>
    </div>
  </div>
</template>
