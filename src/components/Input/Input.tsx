import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";

import { Tasks } from "../../interfaces/Task";
import { TodoTask } from "../Todo/TodoTask";

export const Input = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<Tasks[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleCreateTask = () => {
    const newTask = {
      tasks: { id: Math.floor((Math.random() * 100) / 2), task: task },
    };

    if (newTask.tasks.task === "" || null) {
      return alert("Você precisa escrever algo!");
    }

    setTodo([...todo, newTask]);

    setTask("");
  };

  const handleUpdateTask = (id: number) => {
    const updatedTasks = [...todo];

    const taskExists = updatedTasks.find((task) => task.tasks.id === id);

    const newTaskTitle = prompt("Digite o novo titulo da tarefa");

    if (newTaskTitle === "" || null) {
      return;
    }

    if (taskExists) {
      taskExists.tasks.task = newTaskTitle;
      setTodo(updatedTasks);
    }
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = [...todo];
    const taskIndex = updatedTasks.findIndex((task) => task.tasks.id === id);

    updatedTasks.splice(taskIndex, 1);

    setTodo(updatedTasks);
  };

  const generateRandomColors = (opacidade = 1) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  };

  const taskColor = generateRandomColors();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Adicionar a lista..."
          name="task"
          className={styles.addListInput}
          value={task}
          onChange={handleChange}
        />
        <button
          type="button"
          id={styles.buttonSubmit}
          onClick={handleCreateTask}
        >
          Submit
        </button>
      </div>
      <div>
        {todo.map((task) => (
          <TodoTask
            key={task.tasks.id}
            taskTitle={task.tasks.task}
            updateTask={() => handleUpdateTask(task.tasks.id)}
            deleteTask={() => handleDeleteTask(task.tasks.id)}
            todoColor={taskColor}
          />
        ))}
      </div>
    </>
  );
};
