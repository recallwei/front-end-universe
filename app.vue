<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  // title: 'Front-end Universe',
  meta: [
    {
      name: 'description',
      content: 'A website used to collect various front-end-related resources.'
    }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${appConfig.title}` : appConfig.title
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
