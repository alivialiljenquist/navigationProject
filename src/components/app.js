import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from './navigation-container'
import Home from "./pages/home";
import Toggle from "./pages/toggle";
import FontSizer from "./pages/font-sizer";
import Counter from "./pages/counter";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>

            <NavigationContainer />

            <hr/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/toggle" component={Toggle} />
              <Route path="/font-sizer" component={FontSizer} />
              <Route path="/counter" component={Counter} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
