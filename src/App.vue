<template>
  <div>
    <h1>Todo List App</h1>
    <CreateTodo @add="addTodo" />
    <TodoList :title="listTitle" :todos="todos" @toggle="toggleTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "./types";
import CreateTodo from "./components/CreateTodo.vue";
import TodoList from "./components/TodoList.vue";

const listTitle = "My Todos";
const todos = ref<Todo[]>([
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Do laundry", completed: true },
]);

function addTodo(todoText: string) {
  const newTodo: Todo = {
    id: todos.value.length + 1,
    text: todoText,
    completed: false,
  };
  todos.value.push(newTodo);
}

function toggleTodo(todoId: number) {
  const todo = todos.value.find((todo) => todo.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
  }
}
</script>
