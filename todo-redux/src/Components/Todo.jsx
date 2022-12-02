import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndUpdate } from '../Redux/action';
import { TodoInput } from './TodoInput'
import { TodoItems } from './TodoItems';

export const Todo = () => {
  const[page,setPage] = useState(1);
  let{data,loading,error} = useSelector(state=>state);
  console.log(data);
  let dispatch = useDispatch();
  useEffect(()=>{
   dispatch(fetchAndUpdate(page))
  },[page])
  return (
    <div className='Container'>
      <h1>TODO APP</h1>
        <TodoInput page={page}/>
        {
          data.map(({id,task,status})=>{
           return <TodoItems key={id} id={id} task={task} status={status} page={page}/>
          })
        }
       
        <button disabled={page==1} onClick={()=>setPage(page-1)}>Previous</button>
        <button>{page}</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}
