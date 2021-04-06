import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks , setTasks] = useState([
    {
      id : 1,
      text : 'Study',
      day : 'Apr 6th at 1:30',
      reminder : true,
    },
    {
      id : 2,
      text : 'CP',
      day : 'Apr 7th at 1:30',
      reminder : false,
    }
  ])

  //delete task 
  const deleteTask = (id) => {
    // console.log('delete' , id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder=(id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task , reminder : !task.reminder} : task))
  }

  return (
    <div className = "container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks = {tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
