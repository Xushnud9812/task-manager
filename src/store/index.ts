import { defineStore } from "pinia";
import { Task, Column } from "../components/types/index";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    columns: [
      {
        title: "Backlog",
        tasks: [
          {
            id: "1",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
          {
            id: "2",
            title: "Provide documentation on integrations",
            date: "2023-08-01",
          },
          {
            id: "3",
            title: "Design shopping cart dropdown",
            date: "2023-08-01",
            taskType: "Design",
          },
          {
            id: "4",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
          {
            id: "5",
            title: "Test checkout flow",
            date: "2023-08-01",
            taskType: "QA",
          },
        ],
      },
      {
        title: "In Progress",
        tasks: [
          {
            id: "6",
            title: "Design shopping cart dropdown",
            date: "2023-08-01",
            taskType: "Design",
          },
          {
            id: "7",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
          {
            id: "8",
            title: "Provide documentation on integrations",
            date: "2023-08-01",
            taskType: "Backend",
          },
        ],
      },
      {
        title: "Review",
        tasks: [
          {
            id: "9",
            title: "Provide documentation on integrations",
            date: "2023-08-01",
          },
          {
            id: "10",
            title: "Design shopping cart dropdown",
            date: "2023-08-01",
            taskType: "Design",
          },
          {
            id: "11",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
          {
            id: "12",
            title: "Design shopping cart dropdown",
            date: "2023-08-01",
            taskType: "Design",
          },
          {
            id: "13",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
        ],
      },
      {
        title: "Done",
        tasks: [
          {
            id: "14",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
          {
            id: "15",
            title: "Design shopping cart dropdown",
            date: "2023-08-01",
            taskType: "Design",
          },
          {
            id: "16",
            title: "Add discount code to checkout page",
            date: "2023-08-01",
            taskType: "Feature Request",
          },
        ],
      },
    ] as Column[],
  }),
  actions: {
    addTaskToColumn(columnTitle: string, task: Task) {
      console.log("qani", columnTitle, task);
      const column = this.columns.find((col) => col.title === columnTitle);
      if (column) {
        column.tasks.push(task);
      } else {
        console.error(`Column "${columnTitle}" not found.`);
      }
    },
    deleteTask(taskId: string) {
      for (const column of this.columns) {
        const index = column.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          column.tasks.splice(index, 1);
          break;
        }
      }
    },
  },

  persist: true,
});
