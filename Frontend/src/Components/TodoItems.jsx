import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteData, ToggleData } from '../Redux/action';

export const TodoItems = ({_id,task,status,page}) => {
  const dispatch = useDispatch();
  return (
     <div id="childTodo">
    <h3 style={{color:status?"green":"black"}}>{task}{status?" - Completed":" - Not Completed"}</h3>
    <button style={{
            margin: "5px",
            borderRadius: "5px",
            color: "white",
            padding: "5px",
            border: "none",
            backgroundColor: "crimson",
            cursor: "pointer"
          }} onClick={()=>dispatch(DeleteData(_id,page))}>delete</button>
    <button  style={{
            margin: "5px",
            marginLeft: "30px",
            borderRadius: "5px",
            color: "white",
            padding: "5px",
            border: "none",
            backgroundColor: status ? "red" : "green",
            cursor: "pointer"
          }} onClick={()=>dispatch(ToggleData(_id,page,status))}>{status?"Not Done":"Done"}</button>
     </div>
  )
}
