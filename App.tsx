import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './Components/HelloWorld';
import HelloWorld2 from './Components/HelloWorld2';
import PureComponentDemo from './Components/PureComponentDemo';
import Timer from './Components/Timer';
import TextFile from './Components/TextFile';


function Click(a)
{
  return (
    alert(a)
  )
}
export default function App() {
  return (
    <div>
      <TextFile />
    </div>
  )
}
