<template>
  <div>
    <AppNavigation />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { AppNavigation } from './modules/Header'
</script>

<style scoped></style>
