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
    <TimeLine :slotCount="timeSlots" :tableCount="20" />
  </div>
</template>

<script setup lang="ts">
import BookingSelector from '@/core/components/BookingSelector.vue'
import BookingZone from './components/BookingZone.vue'

import { useFormatDate } from '@/core/composables/useFormatDate'
import { computed, ref } from 'vue'
import TimeLine from '@/core/components/TimeLine.vue'

interface Time {
  time: string
}

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
const timeSlots = <Time[]>[
  { time: '11:00' },
  { time: '11:30' },
  { time: '12:00' },
  { time: '12:30' },
  { time: '13:00' },
  { time: '13:30' },
  { time: '14:00' },
  { time: '14:30' },
  { time: '15:00' },
  { time: '15:30' },
  { time: '16:00' },
  { time: '16:30' },
  { time: '17:00' },
  { time: '17:30' },
  { time: '18:00' },
  { time: '18:30' },
  { time: '19:00' },
  { time: '19:30' },
  { time: '20:00' },
  { time: '20:30' },
  { time: '21:00' },
  { time: '21:30' },
  { time: '22:00' },
]

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
