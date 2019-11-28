import React, { Component } from "react";

export default class HelloWorld2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "Gitanjali",
      LastName: "Mundhe",
      Salary : 1000
    };
    this.increaseSalary = this.increaseSalary.bind(this);
  }
  increaseSalary(){
    this.setState((state)=>({        //setState Function
      Salary : state.Salary + 1000
    }));

        this.setState((state)=>({
      Salary : state.Salary + 222
    }));
  }
  render() {
    return (
      <div>
        <div>FirstName : {this.props.FirstName}</div>
        <div>LastName: {this.props.LastName}</div>
        <div>Salary: {this.state.Salary}</div>
        <button onClick = {this.increaseSalary}>Increase Salary</button>
      </div>
    );
  }
}
