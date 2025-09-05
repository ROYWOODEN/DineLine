<template>
  <div
    @click="emit('select')"
    class="p-3 rounded-xl cursor-pointer font-bold"
    :class="isActive ? 'bg-[#007AFF]' : 'bg-[#242426]'"
  >
    {{ value }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string
  isActive: boolean
}
const { value, isActive } = defineProps<Props>()
const emit = defineEmits(['select'])
</script>

<style scoped></style>
