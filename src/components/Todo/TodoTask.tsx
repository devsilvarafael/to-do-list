import { TaskComponent } from "../../interfaces/Task";

import styles from "./styles.module.scss";

import { AiOutlineClose } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

export const TodoTask = ({
  taskTitle,
  deleteTask,
  updateTask,
  todoColor,
}: TaskComponent) => {
  return (
    <div
      className={styles.todoListStyle}
      style={{ backgroundColor: todoColor }}
    >
      <span>{taskTitle}</span>
      <div>
        <button
          onClick={updateTask}
          style={{ backgroundColor: "#F4AC21", color: "#FFF" }}
        >
          <MdEdit size={22} />
        </button>
        <button
          onClick={deleteTask}
          style={{ backgroundColor: "#f44336", color: "#fff" }}
        >
          <AiOutlineClose size={22} />
        </button>
      </div>
    </div>
  );
};
