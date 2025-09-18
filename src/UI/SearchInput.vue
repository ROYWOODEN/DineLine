<template>
  <div class="w-90">
    <input
      class="w-full p-1 px-5 outline-none border-2 border-[#ffffff15] rounded-md"
      type="text"
      :placeholder="props.placeholder || 'Enter something'"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string
}

const props = defineProps<Props>()
const model = defineModel()
</script>

<style scoped></style>
