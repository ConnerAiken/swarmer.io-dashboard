import React from "react";
import './styles.scss'; 

export default class Dashboard extends React.Component { 
    constructor(props) {
      super(props);

      this.state = {
          sidebarCollapsed: false
      };

      this.collapseSidebar = this.collapseSidebar.bind(this);
    }
    
    componentDidUpdate() {
        console.log(this.state);
    }

    collapseSidebar() {
        this.setState({
            sidebarCollapsed: !this.state.sidebarCollapsed
        });
    }

    render() {
      return (
        <div id="dashboard-container" className={this.state.sidebarCollapsed ? 'expanded' : 'shifted'}>
            <div id="sidebar">  
                <ul>
                    <li id="logo"><span>Swarmer.io</span> <i id="collapse-icon" className="fas fa-bars" onClick={this.collapseSidebar}></i></li>
                    <li><i className="fas fa-home"></i><span>Home</span></li>
                    <li><i className="fas fa-play-circle"></i><span>Test Runners</span></li>
                    <li><i className="fas fa-tachometer-alt"></i><span>Reports</span></li>
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