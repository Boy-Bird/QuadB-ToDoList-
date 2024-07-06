import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useStoreActions, useStoreState } from 'easy-peasy';

const LineItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  const tasks = useStoreState((state) => state.tasks);
  const editTask = useStoreState((state) => state.editTask);

  const setTasks = useStoreActions((actions) => actions.setTasks);
  const setEditTask = useStoreActions((actions) => actions.setEditTask);
  const deleteTask = useStoreActions((actions) => actions.deleteTask)
  const editTaskFn = useStoreActions((actions) => actions.editTaskFn)
  const completeTask = useStoreActions((actions) => actions.completeTask)

  const handleSubmit = (e, id) => {
    e.preventDefault();
    setIsEditing(false);
    // handleEdit(id);
    editTaskFn(id);
    setEditTask('');
  }

  // const handleCheck = (id) => {
  //   const listTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, complete: !task.complete } : task
  //   );
  //   setTasks(listTasks);
  // };

  // const handleDelete = (id) => {
  //   deleteTask(id);
  // };

  // const handleEdit = (id) => {
  //   const listTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, task: editTask } : task
  //   );
  //   setTasks(listTasks);  
  // }

  return (
    <div className="task-box">
      {isEditing ? (
        <form className="editTask" onSubmit={(e) => handleSubmit(e,task.id)}>
          <input 
            id="task" 
            type="text" 
            placeholder={task.task}
            value={editTask==='' ? task.task : editTask}
            onChange={(e) => setEditTask(e.target.value)}  
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
            onChange={() => completeTask(task.id)}
            checked={task.complete}
          />
          <label
            style={task.complete ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => completeTask(task.id)}
          >
            {task.task}
          </label>
          <MdModeEdit
            style={{ color: "dodgerblue" }}
            role="button"
            onClick={() => setIsEditing(true)}
          />
          <FaTrashAlt
            onClick={() => deleteTask(task.id)}
            role="button"
            tabIndex="0"
          />
        </li>
      )}
    </div>
  );
};

export default LineItem;
