import Header from './component/Header'
import TaskInput from './component/TaskInput';
import Content from './component/Content'
import Footer from './component/Footer'
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

function App() {
  const tasks = useStoreState((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header title="ToDo List"/>
      <TaskInput />
      <Content />
      <Footer length={tasks.length} />
    </div>
  )
}

export default App
