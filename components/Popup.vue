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
      class="bg-base-100 fixed top-0 right-0 bottom-0 left-0 z-50 m-auto h-fit w-fit rounded-lg"
    >
      <slot />
    </div>
  </Transition>
  <div
    class="fixed top-0 left-0 z-40 h-full w-full bg-black opacity-50 transition-all duration-300"
    v-if="props.state"
    @click="() => handleClickMask()"
  />
</template>

<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
