import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// Importing all the components here
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Alert from './components/layout/Alert'

import GlobalState from './context/global/GlobalState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <GlobalState>
      <AlertState>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              {/* Route for home page */}
              <Route exact path="/" component={Home} />
              {/* Route for about page */}
              <Route exact path="/about" component={About} />
              {/* Not Found page */}
              <NotFound />
            </Switch>
            <Alert />
          </Fragment>
        </Router>
      </AlertState>
    </GlobalState>
  );
}

export default App;
