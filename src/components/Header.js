import Button from './Button'

const Header = ({ title , onAdd, showAdd}) => {
    const onClick = () => {
        console.log('CLICK')
    }
    return (
        <header className='header'>
            <h1 style = {headingStyle}>{title}</h1>
            <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
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
