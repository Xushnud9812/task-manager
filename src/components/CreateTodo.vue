<template>
  <div class="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow">
    <input
      v-model="newTodoText"
      @keyup.enter="addTodo"
      class="p-2 border rounded"
    />
    <button
      @click="addTodo"
      class="px-4 py-2 bg-blue-500 text-white rounded ml-2"
    >
      Add
    </button>
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
