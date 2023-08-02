<script setup lang="ts">
import { ref } from "vue";
import { useKanbanStore } from "../store";
import TaskCreate from "./TaskCreate.vue";
import TaskItem from "./TaskItem.vue";
const kanbanStore = useKanbanStore();

const isCreateModal = ref(false);
const columnTitle = ref("");

const createTask = (title: string) => {
  columnTitle.value = title;
  isCreateModal.value = true;
};
</script>

<template>
  <div class="container mx-auto flex gap-x-10">
    <TaskCreate
      v-if="isCreateModal"
      :columnTitle="columnTitle"
      @close="isCreateModal = false"
    />
    <div
      class="w-1/4 rounded overflow-hidden"
      v-for="column in kanbanStore.columns"
    >
      <div class="bg-white p-5 flex justify-between">
        <h1>{{ column.title }}</h1>
        <button
          @click="createTask(column.title)"
          class="text-2xl rounded-full px-2"
        >
          +
        </button>
      </div>
      <div class="p-5 bg-slate-300">
        <TaskItem :column="column" />
      </div>
    </div>
  </div>
</template>
