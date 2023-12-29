"use client"
import React, { useState } from 'react'

const page = () => {

  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [Maintask, setMaintask] = useState([])

  let render = <h2>No Task Available</h2>
  
  const submithandler = (e)=>{
    e.preventDefault();
    setMaintask([...Maintask, {task,desc}]);
    settask("")
    setdesc("")
  }
  const deletehandler = (i)=>{
    let copytask = [...Maintask]
    copytask.splice(i,1);
    setMaintask(copytask);

  }

  if(Maintask.length>0){
    render = Maintask.map((t,i) =>{
      return(
        <li key={i} className=' flex items-center justify-between'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold ' >{t.task}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deletehandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    }) 
  }



  

  return (  
    <>
      <h1 className='bg-black text-white text-center text-3xl'>Todo'List</h1>


      <form action="" onSubmit={submithandler} className='flex'>

        <input type="text" 
        placeholder='Enter Your Task' 
        className='m-5 px-5 border-zinc-800 border-2'
        value={task}
        onChange={(e)=>{
          settask(e.target.value);

        }}
        />

        <input
         type="text" 
         placeholder='Enter Task Description' 
         className='m-5 px-5 border-zinc-800 border-2'
         value={desc}
         onChange={(e)=>{
          setdesc(e.target.value)



         }}
         />

        <button  className='bg-black px-2 py-1 m-4 text-white'>Add Task</button>

      </form>
      <hr />
      <div className='bg-slate-400 p-8'>
        <ul>
          {render}
        </ul>
      </div>
      
    
    
    </>
  )
}

export default page
