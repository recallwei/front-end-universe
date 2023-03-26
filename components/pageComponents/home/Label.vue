<template>
  <div class="">
    <NuxtLink
      :to="props.data.href"
      target="_blank"
      class="bg-base-100 flex items-center space-x-1 rounded-3xl py-2 px-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:-translate-y-[2px]"
    >
      <img
        :src="props.data.src"
        :alt="props.data.text"
        class="h-6 w-6"
      />
      <span class="select-none">{{ props.data.text }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { BaseLabel } from '~/types'

type Props = {
  data: BaseLabel
}

const props = defineProps<Props>()
</script>
