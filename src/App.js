import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask ] =useState(false)
  const [tasks, setTasks] = useState('')
  //Add Tasks
  const addTask = (task)=> {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task} //create an object with task and added id
    setTasks([...tasks,newTask]) //add the new task to the list
    //setShowAddTask(!showAddTask)  //Hide the add task form after saving a task
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => 
        task.id !== id)
    ) //Set the remaining ids' tasks
  }

  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={!showAddTask}/> 
      {showAddTask && <AddTask onAdd= {addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
        ("No Tasks on the List")
      }
    </div>
  );
}

export default App;
