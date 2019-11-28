import React, { Component } from "react";

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Address : "",
      Gender : "",
      State : "",
      IsBillingAddressSame:""
    };
    this.submit = this.submit.bind(this);

  }
submit(event)
{
  let {name, value, type, checked} = event.target;
  value=type=="checkbox"?checked:value
 this.setState({
   [name] : value
 })
}

    render() {
    return (
      <div>
        <input type="text" name="FirstName" placeholder="Enter First Name"  onChange = {this.submit}/><br/><br/>
        <input type="text" name="LastName" placeholder="Enter Last Name" onChange = {this.submit}/><br/><br/>
        <textarea name="Address" placeholder="Enter Address" onChange = {this.submit}/><br/><br/>
        Is Billing Address Same <input name="IsBillingAddressSame" type="Checkbox" onChange={this.submit}/><br/><br/>
        Gender: Female <input value="Female" name="Gender" type="radio" onChange = {this.submit}/> 
        Male <input value="Male" type="radio" name="Gender" onChange = {this.submit}/><br/><br/>
        State: <select name="State" onChange={this.submit}>
        <option></option>
        <option>Maharashtra</option>
        <option>Hariyana</option>
        </select><br/><br/>
        <hr/>
        <h3><b>Summary</b></h3>
        <div>FirstName : {this.state.FirstName}</div><br/>
        <div>LastName: {this.state.LastName}</div><br/>
        <div>FullName: {this.state.FirstName} {this.state.LastName}</div><br/>
        <div>Address: {this.state.Address}</div><br/>
        <div>Gender:{this.state.Gender}</div><br/>
        <div>State:{this.state.State}</div><br/>
        <div>IsBillingAddressSame: {this.state.IsBillingAddressSame ? 'true':'false'}</div>
      </div>
    );
  }
}
