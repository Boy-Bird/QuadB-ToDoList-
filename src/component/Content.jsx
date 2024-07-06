import React from 'react'
import TaskList from './TaskList';

const Content = ({tasks,setTasks,editTask, setEditTask, handleCheck, handleDelete, handleEdit }) => {
  
  return (
    <main>
      {tasks.length ? (
        <TaskList 
          tasks = {tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p style={{marginTop: '2rem'}}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content