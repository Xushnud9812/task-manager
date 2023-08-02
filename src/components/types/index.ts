export interface Task {
  id: string;
  title: string;
  date: string;
  taskType: string;
}

export interface Column {
  title: string;
  tasks: Task[];
}
