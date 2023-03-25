<template>
  <div class="inline-block">
    <a :href="props.data.href" class="m-1 rounded-3xl bg-base-100 p-2 pr-4 pl-4 duration-300 hover:shadow-xl">
      <img :src=props.data.src :alt="props.data.text" class="inline-block pr-1">
      <span>{{ props.data.text }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Label } from '~/types'


type Props = {
  data: Label
}

const props = defineProps<Props>();
</script>
