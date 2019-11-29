import React, {Component} from 'react';

export default function loggerHOC(InputCom) {
class InnerClass extends Component{
  componentDidMount()
  {
    console.log("HOC is on");
  }
  render()
  {
    return(
    <div style={{backgroundColor: "pink", padding : 30}}>
    <InputCom {...this.props}/>
    </div>
    );
  }
}
return InnerClass;
}
