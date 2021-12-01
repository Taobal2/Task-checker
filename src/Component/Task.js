import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className="event"
      onDoubleClick={() => {
        onToggle(task.id);
        console.log(task.reminder);
      }}
    >
      <h3 className={`task ${task.reminder ? "reminder" : null}`}>
        {task.text}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
