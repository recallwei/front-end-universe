<script setup lang="ts">
import Label from '~/pages/label.vue'
import allSites from '~/pages/allSites.vue';
import Collection from '~/pages/Collection.vue'
import { ref } from 'vue'
definePageMeta({
  layout: 'default-layout',
  title: 'Front-end Universe'
})

let info = ref([
  {
    'title': "技术博客",
    "content": [
      {
        link: "https://dev.to/",
        title: "dev.to",
        message: "拥有百万开发者的技术社区，开发者分享交流，获取最新技术资讯，提高专业能力的好地方"
      },
      {
        link: "https://juejin.cn/",
        title: '掘金',
        message: '中文技术社区'
      }
    ]
  },
  {
    'title': "技术团队",
    "content": [
      {
        link: "https://dev.to/",
        title: "dev.to",
        message: "拥有百万开发者的技术社区，开发者分享交流，获取最新技术资讯，提高专业能力的好地方"
      },
      {
        link: "https://juejin.cn/",
        title: '掘金',
        message: '中文技术社区'
      }
    ]
  }
])
</script>

<template>
  <div>
    <Label></Label>
    <Collection class="mt-6 mb-10"></Collection>
    <allSites v-for="item in info" :info="item"></allSites>
  </div>
</template>
