import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import { useStoreActions, useStoreState } from 'easy-peasy';

const AddTask = () => {
  const inputRef = useRef();

  const newTask = useStoreState((state) => state.newTask);

  const setNewTask = useStoreActions((actions) => actions.setNewTask);
  const addTask = useStoreActions((actions) => actions.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTask) return;
    addTask(newTask);
    setNewTask('');
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor='addTask'>Add Task</label>
      <input 
        autoFocus
        ref={inputRef}
        id='addTask'
        type="text" 
        placeholder="Add Task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Task'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>

  )
}

export default AddTask