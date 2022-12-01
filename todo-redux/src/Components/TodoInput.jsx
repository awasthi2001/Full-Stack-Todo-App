import React, { useState } from 'react'

export const TodoInput = () => {
  const [value,setvalue] = useState('');
  const handleInput = (e)=>{
    setvalue(e.target.value);
  }
  return (
    <div>
      <input type="text"  id='input' onChange={handleInput}/>
      <button id='btn'>ADD</button>
    </div>
  )
}
