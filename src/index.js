import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from "./components/App";
import HealthCheck from "./components/HealthCheck";
import ItemTemplate from "./components/ItemTemplate/ItemTemplate";
import propertyreader from "./components/property/propertyreader";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/healthz">Health Check</Link>
        </li>
        <li>
          <Link to="/item">Item Creation</Link>
        </li>
        <li>
          <Link to="/proper">Item property</Link>
        </li>
      </ul>    
      <Route exact path="/" component={App} />
      <Route path="/healthz" component={HealthCheck} />
      <Route path="/item" component={ItemTemplate} />
      <Route path="/proper" component={propertyreader} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))