<script setup lang="ts">
import { groupList, labelList } from '~/data'

definePageMeta({
  layout: 'default-layout',
  title: 'Home'
})
</script>

<template>
  <div class="flex flex-col space-y-8">
    <div class="flex space-x-3">
      <Label
        v-for="(item, index) in labelList"
        :data="item"
        :key="index"
      />
    </div>
    <Group
      v-for="(item, index) in groupList"
      :data="item"
      :key="index"
    />
  </div>
</template>
