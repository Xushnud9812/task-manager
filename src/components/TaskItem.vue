<template>
  <div class="w-full bg-white p-4 rounded-lg shadow mb-4" :draggable="true">
    <h4 class="text-md font-semibold">{{ props.title }}</h4>
    <!-- Kartning boshqa ma'lumotlari -->
  </div>
</template>

<script lang="ts" setup>
interface Card {
  id: number;
  title: string;
}

const props = defineProps<Card>();
</script>

<style>
/* Kartlarni bo'sh joylar bilan joylashtirish */
.mb-4 {
  margin-bottom: 1rem;
}
</style>
