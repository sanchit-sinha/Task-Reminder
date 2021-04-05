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

  return (
    <div className = "container">
      <Header />
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
