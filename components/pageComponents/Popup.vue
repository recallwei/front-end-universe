<script setup lang="ts">
const props = defineProps({
  state: {
    type: Boolean,
    default: false,
    required: true,
  },
})

const dialog = ref()
const maskElement = ref()

const emit = defineEmits(['update:state'])

function mask() {
  dialog.value.className = 'hidden'
  maskElement.value.classList.add('hidden')
  maskElement.value.classList.remove('block')
  emit('update:state', false)
}

watch(
  props,
  (event) => {
    if (!event.state) {
      mask()
    } else {
      dialog.value.className = 'block'
      maskElement.value.classList.add('block')
      maskElement.value.classList.remove('hidden')
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="hidden" ref="dialog">
    <slot></slot>
  </div>
  <div
    class="w-full h-full bg-black opacity-50 top-0 left-0 fixed hidden z-40"
    ref="maskElement"
    @click="mask"
  ></div>
</template>
