<template>
  <button :class="props.className">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  className: string
}

const props = defineProps<Props>()
</script>

<style scoped></style>
