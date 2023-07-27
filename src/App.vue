<template>
  <div class="flex">
    <TaskColumn
      v-for="column in columns"
      :key="column.id"
      :title="column.title"
      :cards="column.cards"
      @updateCards="updateCards"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TaskColumn from "./components/TaskColumn.vue";

interface Card {
  id: number;
  title: string;
}

interface Column {
  id: number;
  title: string;
  cards: Card[];
}

const columns = reactive<Column[]>([
  {
    id: 1,
    title: "To Do",
    cards: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ],
  },
  { id: 2, title: "In Progress", cards: [] },
  { id: 3, title: "Done", cards: [] },
]);

const updateCards = (columnId: number, cards: Card[]) => {
  const column = columns.find((col) => col.id === columnId);
  if (column) {
    column.cards = cards;
  }
};
</script>
