import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('CLICK')
    }
    return (
        <header className='header'>
            <h1 style = {headingStyle}>{title}</h1>
            <Button color = 'green' text = 'Add Task' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps={
    'title' : 'Task-Reminder',
}

//CSS in js
const headingStyle={
    color : 'black',
    backgroundColor:'white'
}
export default Header
