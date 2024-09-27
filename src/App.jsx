import { useState } from 'react'
import './App.css'

const App = () => {
  const[tasks, setTasks] = useState(["Doctor's Appointment"]);
  const [newTask, setNewTask] = useState("")

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask])
      setNewTask("")
  }
  };

   const handleChange = (event) => {
    setNewTask(event.target.value)
   }
  
   const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
  
    setTasks(updatedTasks);
   };
   
  return (
    
      <div>
        <h1>To-Do-List</h1>
        <input className='todo-input' value={newTask}type="text" onChange={handleChange} />
        <button className="todo-button"onClick={handleAddTask}>Add to List</button>
       
        <ul className='todo-list'>
          {tasks.map((toDo, index) => {
            return (
             <div>
             <div className='todo-item'>
              <li key={index}>{toDo}</li>
              <button className="remove-btn"onClick={() => handleRemoveTask(index)}>remove from list</button>
                </div>
                <button className='check-item btn'onClick={() => handleAddTask(index)}>check item as done</button>
                <input type='checkbox'></input>

            </div>
            )
          })}
        </ul>
          
      </div>
   
        
  )
}

export default App
