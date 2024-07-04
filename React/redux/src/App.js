
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo, setInputValue } from './Actions';

function App (){
 const dispatch = useDispatch();
 const {todos,inputValue,editIndex}=useSelector((state)=>state);

  const handleAddTodo = () =>{
    dispatch(addTodo())
  }

  const handleRemoveTodo = (index)=>{
    dispatch(removeTodo(index))
  }

  const handleEditTodo = (index)=>{
    dispatch(editTodo(index))
  }

  const handleInputValue = (e)=>{
    dispatch(setInputValue(e.target.value))
  }

  return (
    <div>
      <h1>TODO USING REDUX</h1>
     <input placeholder='todo'
     value={inputValue}
     onChange={handleInputValue}/>
     <button onClick={handleAddTodo}>
      {editIndex!==null? 'Update Todo' : 'Add Todo'}
     </button>

     {todos.map((todo,index)=>(
      <div key={index}>
       <p> {todo}</p>
       <button onClick={()=>handleEditTodo(index)}>edit</button>
       <button onClick={()=>handleRemoveTodo(index)}>Remove</button>
      </div>
     ))}
    </div>
  )
}

export default App;