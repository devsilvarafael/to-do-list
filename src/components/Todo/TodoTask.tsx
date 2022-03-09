import { ITask } from "../../interfaces/Task";

import styles from './styles.module.scss';

import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className={styles.todoListStyle}>
        <span>{task.taskName}</span>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <AiOutlineClose size={22} />
      </button>
    </div>
  );
};