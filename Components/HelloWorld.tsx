import React from 'react';
import Distribution from './Components/ObjectDistribution';

export default function HelloWorld(props)
{

  return (
    <div>
      <div>{props.name}</div>
      <Distribution {...props}/>
      <button onClick = {() => props.MyHandler(props.name)}> Click Me </button>
    </div>
  )
}