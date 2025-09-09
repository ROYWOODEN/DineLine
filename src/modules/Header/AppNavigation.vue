<template>
  <header class="bg-[#2D2D2F] p-4 flex flex-row justify-between items-center">
    <div class="">
      <span>AIRESTO | Супра</span>
    </div>

    <div class="flex flex-row gap-5 items-center">
      <SearchInput :placeholder="'Name please'" />

      <Button
        :className="'p-2 bg-[#3E3E40] rounded-lg hover:bg-[#6d6d72] cursor-pointer transition'"
      >
        <Theme />
      </Button>

      <Button
        :className="'flex flex-row items-center gap-1 p-2 px-4 bg-[#3E3E40] rounded-lg hover:bg-[#6d6d72] cursor-pointer transition'"
      >
        <Exit /> Exit
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from '@/UI/ContentButton.vue'
import SearchInput from '@/UI/SearchInput.vue'
import Exit from './icons/Exit.vue'
import Theme from './icons/Theme.vue'
</script>

<style scoped></style>
