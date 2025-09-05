<template>
  <div>
    <BookingSelector
      :title="'Date:'"
      :toggle="toggleDay"
      :items="formattedDays"
      :active="activeDay"
      :className="'flex flex-row justify-around w-150'"
    />
    <h5 class="opacity-50">Zones</h5>
    <div class="flex flex-row justify-around w-150">
      <BookingZone
        v-for="(zone, index) in zones"
        @select="toggleZone"
        :key="index"
        :zone="zone"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingSelector from '@/core/components/BookingSelector.vue'
import BookingZone from './components/BookingZone.vue'

import { useFormatDate } from '@/core/composables/useFormatDate'
import { computed, ref } from 'vue'

const activeDay = ref<number>(0)
const activeZone = ref<number>(0)
const availableDays = ref<string[]>([
  '2025-04-04',
  '2025-04-05',
  '2025-04-06',
  '2025-04-07',
  '2025-04-08',
])
const zones = ref<string[]>(['1 этаж', '2 этаж', 'Банкетный зал'])

const formattedDays = computed(() => {
  return availableDays.value.map((el) => useFormatDate(el))
})

const toggleDay = (index: number) => {
  activeDay.value = index
}
const toggleZone = (index: number) => {
  activeZone.value = index
}
</script>

<style scoped></style>
