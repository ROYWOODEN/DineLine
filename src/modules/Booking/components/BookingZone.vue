<template>
  <div
    @click="toggleZone"
    class="p-3 rounded-xl cursor-pointer font-bold"
    :class="isActive ? 'bg-[#007AFF]' : 'bg-[#242426]'"
  >
    {{ zone }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  zone: string
  index: number
}
const { zone, index } = defineProps<Props>()

const isActive = ref<boolean>(index === 0)

const toggleZone = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped></style>
