import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GridView } from './views';
import { AppLayout } from './components/Layout'

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/">
            <GridView />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
