<template>
  <div class="inline-block">
    <NuxtLink :to="props.data.href" target="_blank"
      class="bg-base-100 rounded-3xl p-2 pr-4 pl-4 duration-300 hover:shadow-xl">
      <img :src="props.data.src" :alt="props.data.text" class="inline-block pr-1" />
      <span>{{ props.data.text }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Label } from '~/types'

type Props = {
  data: Label
}

const props = defineProps<Props>()
</script>
