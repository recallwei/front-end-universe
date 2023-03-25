<template>
  <div class="flex flex-wrap">
    <router-link
      to=""
      class="m-1 rounded-3xl bg-white p-1 pr-4 pl-4 duration-300 hover:shadow-xl"
      v-for="item in count"
      v-bind:key="item"
    >
      <i>
        <svg
          t="1679718548457"
          class="icon inline-block pr-1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2856"
          width="30"
          height="30"
        >
          <path
            d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
            fill="#41B883"
            p-id="2857"
          ></path>
          <path
            d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
            fill="#34495E"
            p-id="2858"
          ></path>
        </svg>
      </i>
      <span>Vue</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let count = ref(20)
</script>

<style></style>
