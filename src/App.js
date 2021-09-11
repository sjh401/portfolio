import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screens/home/Home';

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
