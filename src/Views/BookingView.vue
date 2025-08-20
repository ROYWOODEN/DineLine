<template>
  <div class="mt-8 ms-8">
    <h1 class="text-3xl">Бронирование</h1>

    <main>
      <h5 class="opacity-50">Дата:</h5>

      <div v-if="hasAvailableDays" class="flex flex-row justify-around w-150">
        <BookingDate
          @select="toggleDay(index)"
          v-for="(day, index) in formattedDays"
          :key="index"
          :day="day"
          :isActive="ActiveDay === availableDays[index]"
        />
      </div>
      <div v-else>
        {{ noBookingMessage }}
      </div>

      <div>
        <span class="opacity-50"> Отображаемые зоны </span>
        <div class="flex flex-row justify-around w-150">
          <BookingZone
            @select="toggleZone(index)"
            v-for="(zone, index) in zones"
            :key="index"
            :zone="zone"
            :isActive="index === ActiveZone"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import BookingDate from '@/components/BookingDate.vue'
import BookingZone from '@/components/BookingZone.vue'
import { useFormatDate } from '@/composables/useFormatDate'
import { computed, ref } from 'vue'

const availableDays = ref<string[]>([
  '2025-04-04',
  '2025-04-05',
  '2025-04-06',
  '2025-04-07',
  '2025-04-08',
])
const zones = ref<string[]>(['1 этаж', '2 этаж', 'Банкетный зал'])
const currentDay = ref<string>('2025-04-04')
const ActiveDay = ref<string>(currentDay.value)
const ActiveZone = ref<number>(0)
const noBookingMessage = 'Брони нет'

const hasAvailableDays = computed(() => availableDays.value.length > 0)

const formattedDays = computed(() => {
  return availableDays.value.map((date) => useFormatDate(date))
})

const toggleDay = (index: number) => {
  ActiveDay.value = availableDays.value[index]
}
const toggleZone = (index: number) => {
  ActiveZone.value = index
}
</script>

<style scoped></style>
