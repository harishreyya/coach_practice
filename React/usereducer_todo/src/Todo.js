
import './App.css';
import { useTodos } from './TodoContext';

export const TodoApp =()=> {
const {state,dispatch} = useTodos();
const {todos,inputValue,editIndex} = state;

const addTodo = ()=>{
  dispatch({type:'ADD_TODO'})
}

const removeTodo = (index)=>{
  dispatch({type:'REMOVE_TODO',payload:index})
}

const editTodo = (index)=>{
  dispatch({type:'EDIT_TODO',payload:index})
}

const handleInputChange = (e)=>{
  dispatch({type:'SET_INPUT_VALUE',payload:e.target.value})
}

return <div>
 <input
 placeholder='todo'
 value={inputValue}
 onChange={handleInputChange}/>

 <button onClick={addTodo}>
{editIndex!==null? 'update todo':'add todo'}
 </button>

{
  todos.map((todo,index)=>(
    <div key={index}>
  <p>{todo}</p>
  <button onClick={()=>editTodo(index)}>edit</button>
  <button onClick={()=>removeTodo(index)}>remove</button>
    </div>
  ) )
}
</div>
}
