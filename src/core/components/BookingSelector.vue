<template>
  <h5 class="opacity-50">{{ title }}</h5>
  <div :class="className">
    <SelectableButton
      @select="toggle(index)"
      v-for="(value, index) in items"
      :key="index"
      :value="value"
      :isActive="active === index"
    />
  </div>
</template>

<script setup lang="ts">
import SelectableButton from '@/UI/SelectableButton.vue'

interface Props {
  title: string
  items: object
  active: number | boolean
  toggle: (index) => void
  className: string
}
const props = defineProps<Props>()

</script>

<style scoped></style>
