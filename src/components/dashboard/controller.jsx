import React from "react";
import './styles.scss';

import HomeView from "./views/home/controller.jsx";
import RunnersView from "./views/runners/controller.jsx";
import ReportsView from "./views/reports/controller.jsx";

export default class Dashboard extends React.Component { 
    constructor(props) {
      super(props);

      this.state = {
          sidebarCollapsed: false,
          activeView: 0
      };

      this.collapseSidebar = this.collapseSidebar.bind(this); 
      this.getView = this.getView.bind(this);
    }
    
    componentDidUpdate() {
        console.log(this.state);
    }

    getView() {
        if(this.state.activeView === 0) {
            return (<HomeView/>); 
        }else if(this.state.activeView === 1) {
            return (<RunnersView/>);
        }else if(this.state.activeView === 2) {
            return (<ReportsView/>);
        }
    }

    changeView(idx) {
        this.setState({
            activeView: idx
        });
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
                    <li onClick={this.changeView.bind(this, 0)}><i className="fas fa-home"></i><span>Home</span></li>
                    <li onClick={this.changeView.bind(this, 1)}><i className="fas fa-play-circle"></i><span>Test Runners</span></li>
                    <li onClick={this.changeView.bind(this, 2)}><i className="fas fa-tachometer-alt"></i><span>Reports</span></li>
                </ul>
            </div>  
            <div id="dashboard"> 
                <div id="dashboard-header">
                    <h3>Dashboard</h3>
                </div>
                <div id="dashboard-content">
                    {this.getView()}
                </div>
            </div>  
        </div>
      );
    }
};