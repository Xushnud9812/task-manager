<template>
  <div class="task-list" ref="listRef">
    <h2 class="title">{{ title }}</h2>
    <draggable
      :list="tasks"
      group="tasks"
      @change="onTaskListChange"
      class="task-list-content"
    >
      <div v-for="task in tasks" :key="task.id" class="task" :data-id="task.id">
        {{ task.text }}
      </div>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

const { title, tasks } = defineProps(["title", "tasks"]);
const listRef = ref(null);

const emit = defineEmits(["taskDropped"]);

function onTaskListChange(event) {
  emit("taskDropped", event, title);
}
</script>

<style>
.task-list {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.title {
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
}

.task {
  padding: 4px 8px;
  margin: 4px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
