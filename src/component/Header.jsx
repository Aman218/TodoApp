import { useState } from 'react';
import './Header.css';
import ToDoList from './TodoList';
import AddIcon from '@mui/icons-material/Add';
function Header(){
    const [todoValue,setTodoValue]=useState('');
    const [todosArr,setTodos]=useState([]);
    function handleChange(e){
        setTodoValue(e.target.value)
    }
    function handleClick(){
        if(todoValue==''||todoValue==' ')return;
        if(todoValue!=''||todoValue!=' '){
            setTodos([...todosArr,todoValue])
        
            setTodoValue('')
        }
       
    }
    return (
      <>
        <div className="todo-container">
            <h1 className="header">TODO Item</h1>
            <div className="inputbox">
                <input type="text" placeholder="Enter your Todo" value={todoValue} id='input-box' onChange={(e)=>{
                    handleChange(e)
                }} />
                <button className='add-btn' onClick={handleClick}> <AddIcon/> Add</button>
            </div>
        </div>
        <ToDoList todoValue={todosArr}/>
        
      </>
    )
  }
  export default Header;