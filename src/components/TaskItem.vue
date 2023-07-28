<template>
  <div
    class="bg-white shadow rounded px-3 pt-3 pb-5 mb-5 border border-white cursor-move"
  >
    <h2>
      {{ props.task.title }}
    </h2>

    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ props.task.date }}</span>
      <span>{{ props.task.type }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  task: {
    type: Object,
    default: () => ({}),
  },
});

const badgeColor = computed(() => {
  const mappings = {
    Design: "purple",
    "Feature Request": "teal",
    Backend: "blue",
    QA: "green",
    default: "teal",
  };
  return mappings[this.task.type] || mappings.default;
});
</script>
