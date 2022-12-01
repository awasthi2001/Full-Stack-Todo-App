import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TodoInput } from './TodoInput'

export const Todo = () => {
  const[page,setPage] = useState(0);
  let{data,loading,error} = useSelector(state=>state);
  let dispatch = useDispatch();
  useEffect(()=>{
   
  },[page])
  return (
    <div className='Container'>
        <TodoInput/>
        
    </div>
  )
}
