<script setup lang="ts">
type Props = {
  state?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  state: false
})

const emit = defineEmits<{
  (e: 'update:state', state: boolean): void
}>()

const handleClickMask = () => emit('update:state', false)
</script>

<template>
  <Transition>
    <div
      v-if="props.state"
      class="z-50"
    >
      <slot />
    </div>
  </Transition>
  <Transition>
    <div
      class="fixed top-0 left-0 z-40 h-full w-full bg-black opacity-50 transition-all duration-300"
      v-if="props.state"
      @click="() => handleClickMask()"
    />
  </Transition>
</template>

<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
