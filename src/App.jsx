import Header from './component/Header'
import AddTask from './component/AddTask';
import Content from './component/Content'
import Footer from './component/Footer'
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState('');

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(tasks));
  }, [tasks])

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, complete: false, task };
    const listTasks = [...tasks, myNewTask];
    setTasks(listTasks);
  }

  const handleCheck = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(listTasks);
  };

  const handleDelete = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTask) return;
    addTask(newTask);
    setNewTask('');
  }

  const handleEdit = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, task: editTask } : task
    );
    setTasks(listTasks);  
  }
  
  return (
    <div className="App">
      <Header title="ToDo List"/>
      <AddTask 
        newTask = {newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <Content 
        tasks={tasks}
        setTasks={setTasks}
        editTask={editTask}
        setEditTask={setEditTask}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Footer length={tasks.length} />
    </div>
  )
}

export default App
