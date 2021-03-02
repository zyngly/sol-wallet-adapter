import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GridView } from './views';
import { SplashView } from './views';
import { AppLayout } from './components/Layout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/beta">
          <AppLayout>
            <GridView />
          </AppLayout>
        </Route>
        <Route path="/">
          <SplashView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
