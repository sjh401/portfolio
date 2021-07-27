import { Route, Switch } from 'react-router-dom';
import React from "react"
// import { Route } from "react-router-dom"
import './App.css';
import Home from './Screens/Home/Home';

const App = () => {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
