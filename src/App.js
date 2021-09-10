import React from 'react';

import './App.css';
import Slider from './Components/Slider/Slider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Vertical from './Components/Vertical/Vertical';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
             <Slider/>
          </Route>
          <Route exact path ="/Horizontal">
          <Slider/>
          </Route>
          <Route exact path ="/Vertical">
          <Vertical/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
