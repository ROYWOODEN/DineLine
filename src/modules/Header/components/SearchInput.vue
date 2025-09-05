<template>
  <div class="w-90">
    <input
      class="w-full p-1 ps-5 outline-none border border-2 border-[#ffffff15] rounded-md w-full"
      type="text"
      :placeholder="props.placeholder || 'Enter something'"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string
}

const props = defineProps<Props>()
</script>

<style scoped></style>
