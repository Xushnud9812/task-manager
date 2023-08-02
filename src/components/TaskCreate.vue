<script setup lang="ts">
import { ref } from "vue";
import { useKanbanStore } from "../store";
import { v4 as uuidv4 } from "uuid";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const kanban = useKanbanStore();

const props = defineProps({
  columnTitle: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["close"]);

const taskTypes = ref(["Bug", "Frontend", "Backend", "QA", "Design"]);

const closeModal = () => {
  emit("close");
};

const newTask = ref({
  id: uuidv4(),
  title: "",
  date: "",
  taskType: "Bug",
});

const createTask = () => {
  kanban.addTaskToColumn(props.columnTitle, newTask.value);
  emit("close");
  newTask.value = {
    id: uuidv4(),
    title: "",
    date: "",
    taskType: "Bug",
  };
};
</script>

<template>
  <div>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div
        @click="closeModal"
        class="modal-overlay absolute inset-0 bg-black/50 opacity-75"
      ></div>

      <div class="bg-slate-100 w-[700px] mx-auto rounded shadow-lg z-50">
        <div class="modal-content py-4 text-left px-6">
          <div class="flex justify-between items-center mb-5">
            <p class="text-2xl">Create new task {{ props.columnTitle }}</p>
            <button @click="closeModal" class="modal-close cursor-pointer z-50">
              <span class="text-2xl">&times;</span>
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <label for="input1">Title</label>
              <input
                v-model="newTask.title"
                type="text"
                placeholder="Title"
                class="w-full px-3 py-2 border focus:outline-none focus:border-primary rounded-lg"
              />
            </div>
            <div>
              <label for="">Date</label>
              <input
                v-model="newTask.date"
                type="date"
                placeholder="Input 2"
                class="w-full px-3 py-2 border focus:outline-none focus:border-primary rounded-lg"
              />
            </div>
            <div class="relative w-full">
              <label for="">Type</label>
              <Listbox v-model="newTask.taskType">
                <ListboxButton
                  class="relative bg-white w-full text-left px-3 py-2 border focus:outline-none focus:border-primary rounded-lg"
                >
                  <span class="block">
                    {{ newTask.taskType }}
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>
                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="(type, index) in taskTypes"
                      :key="index"
                      :value="type"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-primary ' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-10 pr-4',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ type }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </Listbox>
            </div>
          </div>
          <div class="flex justify-end pt-4">
            <button
              @click="createTask"
              class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
