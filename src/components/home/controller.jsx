import React from "react";
import './styles.scss';
import bg from "./../../assets/images/swarm.jpg";

export default class Home extends React.Component { 
    constructor(props) {
      super(props);  
    }
  
    render() {
      return (
        <div id="container">
            <div style={{backgroundImage: `url(${bg})`}}> 
                <h1>Swarmer</h1>
                <hr/>
                <h4>Functional Load Testing</h4>
            </div> 
            <div> 
                <a href="http://swarmer.io/dash">Try It Out</a>
            </div> 
        </div>
      );
    }
};