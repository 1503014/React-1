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
    this.setState({
      FirstName: "Gitanjali",
      LastName: "Mundhe",
      Salary : this.state.Salary + 1000
    })
  }
  render() {
    return (
      <div>
        <div>FirstName : {this.props.FirstName}</div>
        <div>LastName: {this.props.LastName}</div>
        <div>Salary: {this.props.Salary}</div>
        <button onClick = {this.increaseSalary}>Increase Salary</button>
      </div>
    );
  }
}
