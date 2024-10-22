import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import './Todoitem.css';
import { useState } from 'react';
function ToDoItem(props) {


  const [mark,setMark]=useState(false)
  const [edited, setEdited] = useState(false)
  const [initalInputVal, setinitialInputVal] = useState(props.item[0].toUpperCase() + props.item.slice(1, props.item.length).toLowerCase())


  function handleDelete(e) {
    let parent = e.target.closest('.item-container')
    console.log(parent)
    parent.remove()
  }
  function handleEdit(e) {
    let container = e.target.closest('.item-container');
    let item = container.querySelector('.todo-value')
    console.log(item);
    setEdited(!edited);

  }
  function handleSave() {
    setEdited(false)
  }
  function handleClickforMarking(){
    setMark(!mark)
  }
  return (
    <>
      <div className='item-container'>
        <div className='left-cont'>
          {!mark? <button onClick={handleClickforMarking} className='tick-btn'></button>:<button onClick={handleClickforMarking} className='tick-btn' disabled><CheckIcon/></button>}
         
        {!edited ?
          <>
            <p className='todo-value'>{initalInputVal} </p>
          </> :
          <>
            <input className='input-field'placeholder='Type-in Here' type="text" onChange={(e) => {
              let val = e.target.value;
              console.log(val)
              val = val.split('');
              console.log(val)
              val[0] = val[0].toUpperCase();
              for (let i = 1; i < val.length; i++) {
                val[i] = val[i].toLowerCase();
              }
              val = val.join('');
              setinitialInputVal(val)
            }} />
          </>
          
        }
        </div>

        <div>
          {edited ? (
            <button className='save-btn' onClick={handleSave}><SaveIcon /></button>
          ) : (
            <button className='edit-btn' onClick={handleEdit}>
              <EditIcon />
            </button>
          )}

          <button className='delete-btn' onClick={(e) => {
            handleDelete(e)
          }}><DeleteIcon /> </button>
        </div>

      </div>
    </>
  )
}
export default ToDoItem;