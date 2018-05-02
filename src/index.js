import React from "react"; 
import ReactDOM from "react-dom"; 
import App from "./components/app.jsx"; 
import "./components/app.scss"; 

ReactDOM.render(<App />, document.getElementById("app"));
module.hot.accept();
