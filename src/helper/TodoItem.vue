<template>
  <div
    class="w-full flex items-center justify-between hover:bg-white p-3 rounded"
  >
    <!-- <input
      type="checkbox"
      v-model="todo.completed"
      @change="toggleTodo"
      class="mr-2"
    /> -->
    <p :class="{ 'line-through': todo.completed }">{{ todo.text }}</p>
    <div class="flex gap-x-2 items-center">
      <button class="p-1 rounded border border-green-100/50 bg-green-100/50">
        <Icon
          icon="material-symbols:done-rounded"
          color="green"
          class="text-red"
        />
      </button>
      <button class="p-1 rounded bg-red-100/50">
        <Icon icon="pajamas:remove" color="red" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Todo } from "../types";
import { Icon } from "@iconify/vue";

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits();

function toggleTodo() {
  emit("toggle", props.todo.id);
}
</script>
