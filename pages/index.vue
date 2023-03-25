<script setup lang="ts">
import Label from '~/components/Label.vue'
import allSites from '~/pages/allSites.vue'
import Collection from '~/pages/Collection.vue'
import { groupList } from '~/data'
import { labelList } from '~/data'
definePageMeta({
  layout: 'default-layout',
  title: 'Front-end Universe'
})
</script>

<template>
  <div>
    <Label v-for="current in labelList" :data="current"></Label>
    <Collection class="mt-6 mb-10"></Collection>
    <allSites v-for="item in groupList" :data="item"></allSites>
  </div>
</template>
