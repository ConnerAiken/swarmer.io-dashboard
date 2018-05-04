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
                    <li>Swarmer.io</li>
                    <li><i class="fas fa-home"></i> Home</li>
                    <li><i class="fas fa-play-circle"></i> Test Runners</li>
                    <li><i class="fas fa-tachometer-alt"></i> Reports</li>
                </ul>
            </div>  
            <div id="dashboard"> 
                <h2>Dashboard</h2> 
                <hr style={{width: '100%'}}/>
            </div>  
        </div>
      );
    }
};