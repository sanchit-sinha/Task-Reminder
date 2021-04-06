import Task from './Task'
const Tasks = ({tasks , onDelete , onToggle}) => {
    return (
        <>
        {/* for each task in tasks , do the following (unique key value) */}
          {tasks.map((task) => (
              <Task key={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/>
          ))}  
        </>
    )
}

export default Tasks
