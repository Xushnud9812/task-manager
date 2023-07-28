<template>
  <div class="container mx-auto flex gap-x-10">
    <div
      class="w-1/4 rounded overflow-hidden"
      v-for="item in kanbanStore.columns"
    >
      <div class="bg-white p-5">
        <h1>{{ item.title }}</h1>
      </div>
      <div class="p-5 bg-red-100">
        <div class="">
          <draggable
            class="dragArea list-group"
            :list="item.tasks"
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
                  <span>{{ element.type }}</span>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useKanbanStore } from "../store";
import draggable from "vuedraggable";
const kanbanStore = useKanbanStore();
</script>

<style>
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #effd2e;
}
</style>
