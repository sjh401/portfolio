import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './screens/home/Home';

const App = () => {
  return (
    <div className="App">
        <Layout >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
