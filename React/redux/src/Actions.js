
export const setInputValue = (value)=>({
type:'SET_INPUT_VALUE',
payload:value
})

export const addTodo = ()=>({
    type:'ADD_TODO'
})

export const removeTodo = (index) =>({
    type:'REMOVE_TODO',
    payload:index
})

export const editTodo = (index)=>({
type:'EDIT_TODO',
payload:index
})