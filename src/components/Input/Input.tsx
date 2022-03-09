import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";

import { ITask } from "../../interfaces/Task";
import { TodoTask } from "../Todo/TodoTask";

export const Input = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodo([...todo, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

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

        <button type="button" onClick={addTask} id={styles.buttonSubmit}>
          Submit
        </button>
      </div>
      <div>
        {todo.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} completeTask={completeTask} />
        ))}
      </div>
    </>
  );
};
