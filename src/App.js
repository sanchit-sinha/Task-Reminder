import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState , useEffect } from 'react'

function App() {
  const [showAddTask , setShowAddTask] = useState(false)
  const [tasks , setTasks] = useState([])
 
  //  to show something as the page loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksfromserver = await fetchTasks()
      setTasks(tasksfromserver)
    }

    getTasks()
  } , [])

  // fetch tasks from json
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // console.log(data)
    return data
  }

  // fetch tasks from json
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    // console.log(data)
    return data
  }


  // Add task
  const addTask = async(task) => {
    // console.log(task)

    // const id = tasks.length + 1
    // const newTask = {id , ...task}
    // setTasks([...tasks , newTask])
 
    const res = await fetch('http://localhost:5000/tasks', {
      method : 'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks , data])
  }

  //delete task 
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE',
    })


    // console.log('delete' , id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    const tasktoToggle = await fetchTask(id)
    const updateTask = {...tasktoToggle , reminder: !tasktoToggle.reminder }
   
     const res = await fetch(`http://localhost:5000/tasks/${id}` , {
      method : 'PUT',
      headers:{
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(updateTask)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task , reminder : data.reminder} : task))

    // console.log(id)
    // setTasks(tasks.map((task) => task.id === id ? {...task , reminder : !task.reminder} : task))
  }

  return (
    <div className = "container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks = {tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
