<script setup lang="ts">
import draggable from "vuedraggable";
import { TrashIcon } from "@heroicons/vue/24/outline";
import { useKanbanStore } from "../store";
const props = defineProps({
  column: {
    type: Object,
    default: () => ({}),
  },
});
const deleteTask = (taskId: string) => {
  const kanban = useKanbanStore();
  kanban.deleteTask(taskId);
};
</script>
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
          class="bg-white shadow group rounded px-3 pt-3 pb-5 mb-5 border border-white cursor-move"
        >
          <div class="flex justify-between items-start">
            <h2 class="basis-4/5">
              {{ element.title }}
            </h2>
            <div class="flex gap-x-1 items-center">
              <button @click="deleteTask(element.id)">
                <TrashIcon
                  class="hidden group-hover:block h-5 w-5 text-red-500 cursor-pointer"
                />
              </button>
            </div>
          </div>

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
