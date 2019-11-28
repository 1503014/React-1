import React from 'react';

export default function CallBackRef(){
  let inputHandler;
  function onClick()
  {
    inputHandler.focus();
  }
  return (
    <div>
    <h1><b>Call Back Ref</b></h1>
    <input type="text" ref={(handle)=>inputHandler = handle} />
    <input type="button" value="Click Me" onClick={onClick} />
    </div>
  )
}