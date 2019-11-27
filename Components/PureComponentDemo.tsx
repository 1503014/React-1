import React, { Component } from "react";

export default class PureComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words : ["a","b"]
    };
    this.pureCompClick = this.pureCompClick.bind(this);
  }

  pureCompClick()
  {
    const newWord = this.state.words;
    newWord.push("!!");
    console.log(newWord);
    this.setState({words : newWord});
  }

  render() {
    return (
      <div>
        <div>Words: {this.state.words}</div>
        <button onClick = {this.pureCompClick}>PureComp</button>
      </div>
    );
  }
}
