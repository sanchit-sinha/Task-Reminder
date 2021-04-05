const Tasks = ({tasks}) => {
    return (
        <>
        {/* for each task in tasks , do the folloeing (unique key value) */}
          {tasks.map((task) => (
              <h3 key={task.id}>{task.text}</h3>
          ))}  
        </>
    )
}

export default Tasks
