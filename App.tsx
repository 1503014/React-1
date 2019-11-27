import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './Components/HelloWorld';
import HelloWorld2 from './Components/HelloWorld2';
import PureComponentDemo from './Components/PureComponentDemo';
function Click(a)
{
  return (
    alert(a)
  )
}
export default function App() {
  return (
    <div>
      <PureComponentDemo />
    </div>
  )
}
