import React from "react";

const Conditon =(props) => {
    if(props.bio=== undefined) {
    return null
  }else {
   if(props.bio.length>0) {
    return <p> {props.bio}</p>
   }else {
    return null
   }
  }
  }

export default  Conditon;