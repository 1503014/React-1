import React from 'react';

export default function HelloWorld(props)
{
  return (
    <div>
      <div>{props.name}</div>
      <button onClick = {() => props.MyHandler(props.name)}> Click Me </button>
    </div>
  )
}