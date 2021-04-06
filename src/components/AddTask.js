import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text , SetText] = useState('')
    const [day , SetDay] = useState('')
    const [reminder , SetReminder] = useState(false)

    const onSubmit = (e) => {
        // preventing default action 
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
 
        onAdd({text , day , reminder})
        SetText('')
        SetDay('')
        SetReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type = 'text'  value = {text} onChange={(e) => SetText(e.target.value)}  placeholder = 'Add Task'></input>
            </div>

            <div className = 'form-control'>
                <label>Day & Time</label>
                <input type = 'text' value = {day} onChange={(e) => SetDay(e.target.value)} placeholder = 'Add Day & Time'></input>
            </div>

            <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input type = 'checkbox' value = {reminder} onChange={(e) => SetReminder(e.currentTarget.checked)} ></input>
            </div>

            <input type = 'submit' checked={reminder} className='btn btn-block' value = 'Save Task'></input>
            
        </form>
    )
}

export default AddTask
