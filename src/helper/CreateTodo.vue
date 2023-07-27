<template>
  <div class="mt-4 rounded shadow max-w-2xl mx-auto overflow-hidden">
    <div class="p-4 bg-white border-b">
      <h2 class="text-xl font-semibold mb-5">Add New To do</h2>
    </div>

    <div class="px-4 py-4 bg-gray-100 flex justify-between items-center">
      <input
        v-model="newTodoText"
        @keyup.enter="addTodo"
        class="p-2 border rounded flex-1"
      />
      <button
        @click="addTodo"
        class="px-4 py-2 bg-blue-500 text-white rounded ml-2"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newTodoText = ref("");

const emit = defineEmits();

function addTodo() {
  if (newTodoText.value.trim()) {
    emit("add", newTodoText.value.trim());
    newTodoText.value = "";
  }
}
</script>
