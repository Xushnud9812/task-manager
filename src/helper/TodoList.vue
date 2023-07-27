<template>
  <div class="max-w-2xl mx-auto mt-4 rounded shadow overflow-hidden">
    <div class="p-4 bg-white flex items-center justify-between">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <BaseButton color="#ff0000">Delete all</BaseButton>
    </div>
    <div class="px-4 bg-gray-100 flex flex-col gap-2 py-5">
      <div v-for="todo in todos" :key="todo.id" class="flex gap-2 items-center">
        <TodoItem :todo="todo" @toggle="toggleTodo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "../types";
import TodoItem from "./TodoItem.vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps<{ title: string; todos: Todo[] }>();
const emit = defineEmits();

const newTodoText = ref("");

function addTodo() {
  if (newTodoText.value.trim()) {
    emit("add", newTodoText.value.trim());
    newTodoText.value = "";
  }
}

function toggleTodo(todoId: number) {
  emit("toggle", todoId);
}
</script>
