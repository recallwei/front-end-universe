<script setup lang="ts">
const theme = useTheme()
</script>

<template>
  <div
    class="max-w-screen bg-base-300 relative min-h-screen"
    :data-theme="theme"
  >
    <AppHeader />
    <AppContent>
      <slot />
    </AppContent>
    <AppFooter />
  </div>
</template>
