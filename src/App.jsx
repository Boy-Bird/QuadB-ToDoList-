import Header from './component/Header'
import AddTask from './component/AddTask';
import Content from './component/Content'
import Footer from './component/Footer'
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

function App() {

  const tasks = useStoreState((state) => state.tasks)
  const newTask = useStoreState((state) => state.newTask);
  const setTasks = useStoreActions((actions) => actions.setTasks);
  const setNewTask = useStoreActions((actions) => actions.setNewTask);
  const editTask = useStoreState((state) => state.editTask);
  const setEditTask = useStoreActions((actions) => actions.setEditTask);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className="App">
      <Header title="ToDo List"/>
      <AddTask />
      <Content />
      <Footer length={tasks.length} />
    </div>
  )
}

export default App
