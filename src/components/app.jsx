import React from "react"; 
import Home from "./home/controller.jsx";
import Dashboard from "./dashboard/controller.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from "jquery";

export default class App extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    $(document).ready(function() {
        $('#app').fadeIn();
    });
  }

  render() {
    return (   
        <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/> 
            </Switch> 
        </Router>
    );
  }
};