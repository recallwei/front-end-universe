<script setup lang="ts">
import type { Group } from '~/types'
type Props = {
  data: Group
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <div class="mb-4 flex items-center">
      <img
        :src="props.data.src"
        class="mr-2 h-[30px] w-[30px]"
      />
      <span class="text-2xl">{{ props.data.title }}</span>
    </div>
    <div class="grid grid-cols-4 justify-items-center gap-8">
      <div
        class="card bg-base-100 inline-block w-full duration-300 hover:shadow-xl"
        v-for="(item, index) in props.data.children"
        :key="index"
      >
        <NuxtLink
          :to="item.href"
          target="_blank"
        >
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">{{ item.title }}</h2>
            <h2 class="card-title border-b-2"></h2>
            <p class="text-center text-[#6b7280]">{{ item.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
