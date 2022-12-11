import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAndUpdate, postData } from '../Redux/action';


export const TodoInput = ({page}) => {
  const [value,setvalue] = useState('');
  let dispatch = useDispatch();
  const handleInput = (e)=>{
    setvalue(e.target.value);
  }
  let User_Id = localStorage.getItem('User_Id');
  const handleAdd = ()=>{
    if(value==""){
      alert("please enter the task")
    }else{
      let todo = {
        status : false,
        task : value,
        User_Id : User_Id
      }
       dispatch(postData(todo,page));
    }
 
     //dispatch(fetchAndUpdate(page))
  }

  return (
    <div>
      <input type="text"  id='input' onChange={handleInput}/>
      <button id='btn' onClick={handleAdd}>ADD</button>
    </div>
  )
}
