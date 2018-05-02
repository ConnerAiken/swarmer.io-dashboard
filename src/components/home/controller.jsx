import React from "react";
import './styles.scss';

export default class Home extends React.Component { 
    constructor(props) {
      super(props);  
    }
  
    render() {
      return (
        <div id="container">
            <div> 
                <h1>Swarmer</h1>
                <h4>Functional Load Testing made easy</h4>
            </div> 
            <div> 
                <a href="http://swarmer.io/dash">Try It Out</a>
            </div> 
        </div>
      );
    }
};