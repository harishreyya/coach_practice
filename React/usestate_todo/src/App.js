import { useState } from 'react';
import './App.css';

function App() {
const [todos,setTodos] = useState([]);
const [inputValue,setInputValue] = useState('');
const [editIndex,setEditIndex]=useState(null);

const addTodo =()=>{
if(editIndex!==null){
  const newTodos = [...todos];
  newTodos[editIndex] = inputValue;
  setTodos(newTodos);
  setEditIndex(null);
}else{
  setTodos([...todos,inputValue]);
}
setInputValue('')
}

const removeTodo = (index)=>{
  const newTodos = todos.filter((_,i)=> i!==index)
  setTodos(newTodos)
  
}

const editTodo = (index)=>{
  setInputValue(todos[index])
  setEditIndex(index)
}



return <div>
  <input placeholder='todo' 
  value={inputValue}
  onChange={(e)=>setInputValue(e.target.value)}/>
  <button onClick={addTodo}>
    {editIndex!==null?'Update Todo':'Add Todo'}
  </button>

  {
    todos.map((todo,index)=>(
      <div key={index}>
    <p>{todo}</p>
    <button onClick={()=>editTodo(index)}>edit</button>
    <button onClick={()=>removeTodo(index)}>remove</button>
      </div>
    ))
  }


</div>
}

export default App;