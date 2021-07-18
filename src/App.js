import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { history } from './shared/helpers/history'
import routing from './app.router';
import RouteWithSubroutes from './shared/utils/routewithsubroutes';
function App() {
  return (
    <BrowserRouter>
      <Switch history={history}>
          <Redirect exact from="/" to="/calculator" />
        {routing.map((route, i) => (
          <RouteWithSubroutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
export default App;