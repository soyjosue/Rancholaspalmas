import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Calendary from './pages/Calendary';
import Contact from './pages/Contact';

// CSS Globales
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>

          {/* Page Home */}
          <Route path="/" component={Home} exact />

          {/* Page Calendario */}
          <Route path="/calendario" component={Calendary} exact />

          {/* Page Contacto */}
          <Route path="/contacto" component={Contact} exact />

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
