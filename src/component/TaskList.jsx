import React from "react";
import LineItem from "./LineItem";
import { useStoreState } from 'easy-peasy';

const TaskList = () => {
  const tasks = useStoreState((state) => state.tasks)

  return (
    <ul>
      {tasks.map((task) => (
        <LineItem 
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
