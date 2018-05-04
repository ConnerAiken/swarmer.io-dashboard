import React from "react";
import './styles.scss';
import bg from "./../../assets/images/swarm.jpg";
import panda from "./../../assets/images/panda.png";

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
                <div> 
                    <h4>Well, what are you waiting for?</h4>
                    <ul>
                        <li>Load test your web application from the cloud</li>
                        <li>Simulate actual user behavior</li>
                        <li>Detailed reports of user experience</li>
                        <li>Import existing or design new end to end tests</li>
                    </ul>
                    <a href="/dash" class="button">Try It Out</a>
                    <p><small>* Compatible with Webdriverio and Nightwatch</small></p>
                </div>
                <div>
                    <img src={panda}/>
                </div>
            </div> 
        </div>
      );
    }
};