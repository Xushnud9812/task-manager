<template>
  <div class="w-1/3 bg-gray-200 p-4 rounded-lg shadow">
    <h3 class="text-lg font-bold">{{ props.title }}</h3>
    <draggable
      v-model="props.cards"
      :group="group"
      @change="onDragEnd"
      :itemKey="(item) => item.id"
    >
      <template #item="{ element, index }">
        <TaskItem
          :id="element.id"
          :title="element.title"
          @updateCards="updateCards"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import TaskItem from "./TaskItem.vue";

interface Card {
  id: number;
  title: string;
}

const props = defineProps<{
  title: string;
  cards: Card[];
}>();

const group = "kanban-group";
const emit = defineEmits(["updateCards"]);

const onDragEnd = () => {
  emit("updateCards", props.cards);
};
</script>
