import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Screens/About/About';
import Home from './Screens/Home/Home';
import Repos from './Screens/Repos/Repos';
import Skills from './Screens/Skills/Skills';

const App = () => {
  return (
    <div className="App">
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/repos">
          <Repos />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
