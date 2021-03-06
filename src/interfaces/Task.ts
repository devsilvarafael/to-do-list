export interface Task {
  id: number;
  task: string | null;
  color: string;
}

export interface Tasks {
  tasks: Task;
}

export interface TaskComponent {
  taskTitle: string | null;
  deleteTask: () => void;
  updateTask: () => void;
  todoColor?: string;
}
