<template>
  <div class="contaiter">
    <!-- Side menu -->
    <div class="left flex flex-col sticky left-0">
      <div class="h-[50px]">&nbsp;</div>
      <div class="opacity-40 h-[50px]" v-for="({ time }, index) in slotCount" :key="index">
        {{ time }}
      </div>
    </div>

    <div class="rigth flex flex-col">
      <!-- Slots header -->
      <div class="flex flex-row">
        <div class="w-[120px] h-[50px] text-center" v-for="(col, index) in tableCount" :key="index">
          #{{ col }}
        </div>
      </div>

      <!-- Slots content -->
      <div class="grid grid-cols-20" v-for="(value, row) in slotCount" :key="row">
        <div
          class="w-[120px] h-[50px] border-[#3F3F41] border-t-2 border-e-2"
          v-for="(slot, col) in tableCount"
          :key="col"
        >
          {{ slot }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slotCount: Time[]
  tableCount: number
}
interface Time {
  time: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.contaiter {
  display: flex;
  flex-direction: row;
  overflow: auto;
  scrollbar-width: none;
}
</style>
