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
import EmployeeForm from './Components/EmployeeForm';
import CustomButtonWrapper from './Components/CustomButtonWrapper';
import BorderComp from './Components/PropsChildren';


function Click(a)
{
  return (
    alert(a)
  )
}
export default function App() {
  return (
    <div>
    {
      //<CustomButtonWrapper  MyButtonHandler={()=>alert("Clicked")}
    }
    <BorderComp>
    <button >Hello</button>
    </BorderComp>
    </div>
  )
}
