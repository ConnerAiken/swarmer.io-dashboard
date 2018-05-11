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
        <div id="home-container" className="container">
            <div id="hero" style={{backgroundImage: `url(${bg})`}}> 
                <h1>Swarmer</h1>
                <hr/>
                <h4>Selenium Grid and PhantomJS Automated Testing</h4>
                <p>Setup your UI tests to run in the cloud and forget about it</p>
            </div> 
            <div id="features">  
                <div> 
                    <h4>Well, what can Swarmer do for you anyway?</h4>
                    <ul> 
                        <li>Simulate actual user behavior</li>
                        <li>Detailed reports of user experience</li>
                        <li>Import existing or design new end to end tests</li>
                    </ul>
                    <a href="/dashboard" class="button">Try It Out <i className="fas fa-arrow-circle-right"></i></a>
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
