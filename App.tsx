import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './Components/HelloWorld';
import HelloWorld2 from './Components/HelloWorld2'
function Click(a)
{
  return (
    alert(a)
  )
}
export default function App() {
  return (
    <div>
    <HelloWorld  name = "Hello World" MyHandler = {Click}/>
    <HelloWorld2 FirstName = "Gitanjali" LastName = "Mundhe" Salary = "1000"/>
    </div>
  )
}
