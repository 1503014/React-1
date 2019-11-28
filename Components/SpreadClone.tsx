import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import App from './App'

export default function Clone()
{
let a = {
   FirstName: "Gitanjali",
      LastName: "Mundhe",
      Salary : 1000
}

let b = {
  ...a,
  Salary : 10
}

let c = [1,2,3]
let d = [...c,5]

console.log(a);
console.log(b);
console.log(c);
console.log(d);
}




  