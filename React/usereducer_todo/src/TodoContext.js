import { createContext, useContext, useReducer } from "react";
import { todoReducer, initialState } from "./TodoReducer";

const TodoContext = createContext();

export const useTodos = ()=> useContext(TodoContext);

export const TodoProvider = ({children})=>{
    const [state,dispatch] = useReducer(todoReducer,initialState);

    return (
        <TodoContext.Provider value={{state,dispatch}} >
       {children}
        </TodoContext.Provider>
    )
}
