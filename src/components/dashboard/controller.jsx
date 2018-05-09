import React from "react";
import './styles.scss'; 

export default class Dashboard extends React.Component { 
    constructor(props) {
      super(props);  
    }
  
    render() {
      return (
        <div id="dashboard-container" className="container">
            <div id="sidebar">  
                <ul>
                    <li id="logo">Swarmer.io</li>
                    <li><i class="fas fa-home"></i> Home</li>
                    <li><i class="fas fa-play-circle"></i> Test Runners</li>
                    <li><i class="fas fa-tachometer-alt"></i> Reports</li>
                </ul>
            </div>  
            <div id="dashboard"> 
                <div id="dashboard-header">
                    <h3>Dashboard</h3>
                </div>
                <div id="dashboard-content">
                    <p>Lorem ipsum..</p>
                </div>
            </div>  
        </div>
      );
    }
};