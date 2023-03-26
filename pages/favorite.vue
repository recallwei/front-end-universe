<script setup lang="ts">
definePageMeta({
  layout: 'default-layout',
  title: 'Favorite'
})

useHead({
  title: 'Favorite'
})
// type OptionType = "logo" | "picture"
// const selectedOption = ref<OptionType>("logo")

// function onSelectChange(event: any) {
//   selectedOption.value = event.target.value as OptionType
// }
</script>

<template>
  <Collection />
  <div class="bg-base-100 add flex h-[300px] w-[500px] flex-col items-center space-y-4">
    <span class="mt-3 block text-2xl font-bold">添加站点</span>
    <div class="flex flex-col space-y-4">
      <div class="form-control grid grid-flow-col grid-rows-3 gap-4">
        <!-- <label class="input-group">
                        <span class="w-[70px] flex justify-center">
                          <select class="w-[60px] bg-transparent outline-none" @change='(event) => onSelectChange(event)'>
                            <option :selected="selectedOption === 'logo'" value="logo">logo</option>
                            <option :selected="selectedOption === 'picture'" value="picture">pic</option>
                          </select>
                        </span>
                        <input type="text" v-if="selectedOption === 'logo'" placeholder="请输入你要添加的站点的logo"
                          class="border-solid pl-2  border-2 py-1 rounded-md w-[300px] focus:outline-none focus:border-green-300" />
                        <input type="file" v-else class="file-input file-input-bordered file-input-sm leading-9  w-full h-full" />
                      </label> -->
        <label class="input-group">
          <span class="flex w-[70px] justify-center">名称</span>
          <input
            type="text"
            placeholder="请输入你要添加的站点的名称"
            class="w-[300px] rounded-md border-2 border-solid py-1 pl-2 focus:border-green-300 focus:outline-none"
          />
        </label>
        <label class="input-group">
          <span class="flex w-[70px] justify-center">描述</span>
          <input
            type="text"
            placeholder="请输入你要添加的站点的描述"
            class="w-[300px] rounded-md border-2 border-solid py-1 pl-2 focus:border-green-300 focus:outline-none"
          />
        </label>
        <label class="input-group">
          <span class="flex w-[70px] justify-center">网址</span>
          <input
            type="text"
            placeholder="请输入你要添加的站点的网址"
            class="w-[300px] rounded-md border-2 border-solid py-1 pl-2 focus:border-green-300 focus:outline-none"
          />
        </label>
      </div>
      <div class="flex justify-around">
        <button class="btn btn-success">收藏</button>
        <button class="btn btn-active">取消</button>
      </div>
    </div>
  </div>
</template>
