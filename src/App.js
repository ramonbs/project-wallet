import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/carteira"
        component={ Wallet }
      />
      <Route
        exact
        path="/"
        component={ Login }
      />

    </Switch>
  );
}

export default App;
