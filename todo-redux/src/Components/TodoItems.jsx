import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteData, ToggleData } from '../Redux/action';

export const TodoItems = ({id,task,status,page}) => {
  const dispatch = useDispatch();
  return (
     <div>
    <h3>{task}</h3>
    <span>{status?"completed":"Not completed"}</span>
    <button onClick={()=>dispatch(DeleteData(id,page))}>delete</button>
    <button onClick={()=>dispatch(ToggleData(id,page,status))}>Toggle</button>
     </div>
  )
}
