import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screens/home/Home';
import Work from './screens/work/Work';
import Resume from './screens/resume/Resume';
import About from './screens/about/About';


const App = () => {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/work" component={Work} />
        </Switch>
    </div>
  );
}

export default App;
