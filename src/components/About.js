import React from "react";
import Links from "./Links";
import Conditon from "./Condition";


function About(props) {
  console.log(props)
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <Conditon bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
