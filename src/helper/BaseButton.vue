<script setup lang="ts">
import { ref, computed } from "vue";

const { color } = defineProps(["color"]);

const emit = defineEmits();

const isHovering = ref(false);

const classes = computed(() => {
  return isHovering.value
    ? `hover:bg-[${color}] text-white`
    : `border-[${color}]`;
});
// const backgroundColor = computed(() =>
//   isHovering.value ? `bg-[${color}]` : "bg-gray-500"
// );
// const textColor = computed(() => (color ? "text-white" : ""));

function handleClick() {
  emit("click");
}
</script>
<template>
  <button
    class="px-4 py-2 rounded focus:outline-none transition duration-300 ease-in-out border"
    :class="classes"
    @click="handleClick"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <slot></slot>
  </button>
</template>
