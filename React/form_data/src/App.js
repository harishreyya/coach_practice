import React, { useState, useEffect } from 'react';

function App (){
const [form,setForm]=useState({
  title:'',
  body:'',
  email:''
})

const handleChange = (e)=>{
const {name,value} = e.target;
setForm({
  ...form,
  [name]:value
})
}

const handleSubmit = async (e)=>{
e.preventDefault();

try {

  const response = await fetch('http://localhost:3001/users',{
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
    },
    body:JSON.stringify(form)

  })

 
    const data = await response.json()
    console.log(data,"succesful post call")
  
} catch (error) {
  console.log("error-",error)
}


}

  return (
    <div>
      <h1>Handling form data with json server</h1>
     <form onSubmit={handleSubmit}>
  <label>Title</label>
  <input placeholder='title' name='title' type='text' value={form.title} onChange={handleChange}/>
  <label>body</label>
  <input placeholder='body' name='body' value={form.body} onChange={handleChange}/>
  <label>email</label>
  <input placeholder='email' type='email' name='email' value={form.email} onChange={handleChange}/>
    <button type='submit'>submit</button>
     </form>
    </div>
  )
}
// ------------

export default App;