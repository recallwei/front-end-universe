<script setup lang="ts">
const theme = useTheme()
</script>

<template>
  <div
    class="min-h-screen max-w-screen bg-base-300 relative"
    :data-theme="theme"
  >
    <AppHeader />
    <AppContent>
      <slot />
    </AppContent>
    <AppFooter />
  </div>
</template>
