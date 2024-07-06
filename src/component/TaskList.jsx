import React from "react";
import LineItem from "./LineItem";

const TaskList = ({ tasks, setTasks,editTask, setEditTask, handleCheck, handleDelete, handleEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <LineItem 
          key={task.id}
          task={task}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
