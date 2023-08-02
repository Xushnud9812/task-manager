<template>
  <div>
    <draggable
      class="dragArea list-group"
      :list="props.column.tasks"
      :animation="200"
      ghost-class="ghost-card"
      :group="{ name: 'kanban' }"
      item-key="id"
    >
      <template #item="{ element }">
        <div
          class="bg-white shadow rounded px-3 pt-3 pb-5 mb-5 border border-white cursor-move"
        >
          <h2>
            {{ element.title }}
          </h2>

          <div class="flex mt-4 justify-between items-center">
            <span class="text-sm text-gray-600">{{ element.date }}</span>
            <span class="bg-primary px-2 rounded-md text-sm">{{
              element.taskType
            }}</span>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";

const props = defineProps({
  column: {
    type: Object,
    default: () => ({}),
  },
});
</script>
