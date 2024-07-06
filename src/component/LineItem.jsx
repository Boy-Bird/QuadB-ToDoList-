import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const LineItem = ({ task, setTasks, editTask, setEditTask, handleCheck, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e,id) => {
    e.preventDefault();
    setIsEditing(false);
    setEditTask('');
    handleEdit(id);
  }
  return (
    <div className="task-box">
      {isEditing ? (
        <form className="editTask" onSubmit={(e) => handleSubmit(e,task.id)}>
          <input 
            id="task" 
            type="text" 
            placeholder={task.task}
            value={editTask === "" ? task.task : editTask}
            onChange={(e) => setEditTask(e.target.value === ""? task.task : e.target.value)}  
          />
          <button
            type="submit"
            aria-label="Add Task"
            >
            <FaPlus />
          </button>
        </form>
      ) : (
        <li className="task">
          <input
            type="checkbox"
            onChange={() => handleCheck(task.id)}
            checked={task.complete}
          />
          <label
            style={task.complete ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(task.id)}
          >
            {task.task}
          </label>
          <MdModeEdit
            style={{ color: "dodgerblue" }}
            role="button"
            onClick={() => setIsEditing(true)}
          />
          <FaTrashAlt
            onClick={() => handleDelete(task.id)}
            role="button"
            tabIndex="0"
          />
        </li>
      )}
    </div>
  );
};

export default LineItem;
