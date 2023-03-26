<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer class="footer bg-base-200 text-base-content py-8 px-20 shadow-sm">
    <div>
      <img
        width="48"
        height="48"
        src="~/assets/favicon.png"
        :alt="appConfig.title"
      />
      <div class="flex flex-col space-y-1">
        <span class="font-bold">Front-end Universe</span>
        <span>Deploy by Vercel</span>
      </div>
    </div>
    <div>
      <span class="footer-title">Category1</span>
      <a class="link link-hover">Link1</a>
      <a class="link link-hover">Link2</a>
    </div>
    <div>
      <span class="footer-title">Category2</span>
      <a class="link link-hover">Link1</a>
      <a class="link link-hover">Link1</a>
    </div>
    <div>
      <span class="footer-title">Category3</span>
      <a class="link link-hover">Link1</a>
      <a class="link link-hover">Link2</a>
    </div>
  </footer>
</template>
