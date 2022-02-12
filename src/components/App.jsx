import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer, Home, About, Portfolio } from '.';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <div>
              <Home />
            </div>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
