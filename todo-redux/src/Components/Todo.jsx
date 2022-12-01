import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndUpdate } from '../Redux/action';
import { TodoInput } from './TodoInput'

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

    </div>
  )
}
