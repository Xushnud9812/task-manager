<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      v-model="todo.completed"
      @change="toggleTodo"
      class="mr-2"
    />
    <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { Todo } from "../types";

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits();

function toggleTodo() {
  emit("toggle", props.todo.id);
}
</script>
