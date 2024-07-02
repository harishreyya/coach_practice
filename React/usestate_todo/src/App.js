import { useState } from 'react';
import './App.css';

function App() {
const [todos,setTodos] = useState([]);
const [inputValue,setInputvalue] = useState('');

const addTodo = ()=>{
    setTodos([...todos,inputValue]);
    setInputvalue('');
}

const removeTodo = (index) =>{
 const newTodos = todos.filter((_,i)=>i!==index);
 setTodos(newTodos)
}

  return (
    <div className="App">

      <input placeholder='todo' 
      value={inputValue} 
      onChange={(e)=>setInputvalue(e.target.value)}/>
      <button onClick={addTodo}>submit</button>

      <div>
        {todos.map((todo,index)=> (
          <div key={index}>
          <p>{todo}</p>
          <button onClick={()=>removeTodo(index)}>remove</button>
          </div>
          )
         
        )}
      </div>
      
    </div>
  );
}

export default App;
