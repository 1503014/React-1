import React, {PureComponent} from 'react';

export default class TextFile extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      words : ""
    };
    this.submit = this.submit.bind(this);
  }
  submit(event)
  {
     this.setState({words : event.target.value})
  }
  render() {
    return (
      <div>
        <input type = "text" onChange = {this.submit}/>
        <div>{this.state.words}</div>
      </div>
    );
  }
}