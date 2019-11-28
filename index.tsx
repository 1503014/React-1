import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <div>
  <App />
  </div>,
document.getElementById('root'));

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
// Spread Rest
var emp = {
  Salart : 100,
  FirstName : "aaaa",
  LastName : "appp"
}

let obj1 = {FName : emp.FirstName, Lname : "bb", ...emp}
console.log(obj1);
