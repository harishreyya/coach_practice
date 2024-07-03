export const initialState = {
    todos:[],
    inputValue:"",
    editIndex:null
}

export const todoReducer = (state,action)=>{
switch(action.type){
    case "SET_INPUT_VALUE":
        return {
            ...state,
            inputValue: action.payload
        };

    case "ADD_TODO":
    
            if(state.editIndex!==null){
              const newTodos = [...state.todos];
              newTodos[state.editIndex]= state.inputValue;
              return {
                ...state,
                todos:newTodos,
                inputValue:"",
                editIndex:null
              }
            }else{
                return{
                    ...state,
                    todos:[...state.todos,state.inputValue],
                    inputValue:""
                }
            }

    case "REMOVE_TODO":
        return {
            ...state,
            todos: state.todos.filter((_,i)=>i!==action.payload)
        };
    case "EDIT_TODO":
        return{
            ...state,
            inputValue:state.todos[action.payload],
            editIndex:action.payload
        }
        
   default:
    return state;
}

}