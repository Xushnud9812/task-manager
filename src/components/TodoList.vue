<template>
     <div class="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <div v-for="todo in todos" :key="todo.id" class="flex items-center">
      <TodoItem :todo="todo" @toggle="toggleTodo" />
    </div>
    <div class="mt-4">
      <input v-model="newTodoText" @keyup.enter="addTodo" class="p-2 border rounded" />
      <button @click="addTodo" class="px-4 py-2 bg-blue-500 text-white rounded ml-2">Add</button>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Todo } from '../types';
  import TodoItem from './TodoItem.vue';
  
  const props = defineProps<{ title: string; todos: Todo[] }>();
  const emit = defineEmits();
  
  const newTodoText = ref('');
  
  function addTodo() {
    if (newTodoText.value.trim()) {
      emit('add', newTodoText.value.trim());
      newTodoText.value = '';
    }
  }
  
  function toggleTodo(todoId: number) {
    emit('toggle', todoId);
  }
  </script>