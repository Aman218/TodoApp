
import './TodolIst.css';
import ToDoItem from "./ToDoItem";
function ToDoList(props){
  console.log(props);

  
    return (
      <>
         {props.todoValue.length>0 && <div className="todolist-container">
          
           {props.todoValue.map((item,index)=>{
            return <ToDoItem item={item} key={index}/>
           })}
        
          </div>}
      </>
    )
  }
  export default ToDoList;