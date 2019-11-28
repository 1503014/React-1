import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './Components/HelloWorld';
import HelloWorld2 from './Components/HelloWorld2';
import PureComponentDemo from './Components/PureComponentDemo';
import Timer from './Components/Timer';
import TextFile from './Components/TextFile';
import Clone from './Components/SpreadClone';
import InputWithFocus from './Components/InputWithFocus';
import CallBackRef from './Components/CallBackRef';


function Click(a)
{
  return (
    alert(a)
  )
}
export default function App() {
  return (
    <div>
      <InputWithFocus />
      <CallBackRef />
    </div>
  )
}
