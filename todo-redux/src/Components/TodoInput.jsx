import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAndUpdate } from '../Redux/action';
import { postData } from '../Utility/postData';

export const TodoInput = ({page}) => {
  const [value,setvalue] = useState('');
  console.log(value)
  let dispatch = useDispatch();
  const handleInput = (e)=>{
    setvalue(e.target.value);
  }
  const handleAdd = async()=>{
    let todo = {
      status : false,
      task : value
    }
    await postData(todo);
     dispatch(fetchAndUpdate(page))
  }

  return (
    <div>
      <input type="text"  id='input' onChange={handleInput}/>
      <button id='btn' onClick={handleAdd}>ADD</button>
    </div>
  )
}
