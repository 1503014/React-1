import React from 'react';

export default function InputWithFocus(){
  let inputHandler = React.createRef();
  function onClick()
  {
    inputHandler.current.focus();
  }
  return (
    <div>
    <h1><b>Ref [createRef]</b></h1>
    <input type="text" ref={inputHandler} />
    <input type="button" value="Click Me" onClick={onClick} />
    </div>
  )
}