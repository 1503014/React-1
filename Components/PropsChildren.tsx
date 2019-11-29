import React from "react";

import LoggerHOC from './LoggerHOC';

let PropsChildren = (props) => (
  <div style={{ backgroundColor: "red", padding:20}}>
    {props.children}
    <div style={{ backgroundColor: "green", padding:20}}>
    {props.children}
    </div>
  </div>
);
//export default PropsChildren;
export default LoggerHOC(PropsChildren);