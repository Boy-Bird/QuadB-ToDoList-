import React from 'react'
import TaskList from './TaskList';
import { useStoreState } from 'easy-peasy';

const Content = () => {
  const tasks = useStoreState((state) => state.tasks);
  return (
    <main>
      {tasks.length ? (
        <TaskList />
      ) : (
        <p style={{marginTop: '2rem'}}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content