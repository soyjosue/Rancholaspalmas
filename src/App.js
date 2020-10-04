import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/config" exact>
            <h1>Config</h1>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
