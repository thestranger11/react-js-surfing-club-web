import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home';
import MenuContainer from './components/MenuContainer';
import Footer from './components/Footer';
import SimplePage from './components/pages/SimplePage';

import './App.css';

function App() {
  return (
    <Router>
        <MenuContainer element='header' />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/stories">
              <SimplePage 
              title="Stories"
              content="This is example content of Stories page"
              />
            </Route>
            <Route path="/events">
              <SimplePage 
                title="Events"
                content="This is example content of Events page"
              />
            </Route>
            <Route path="/places">
              <SimplePage 
                title="Places"
                content="This is example content of Places page"
              />
            </Route>
            <Route path="/boards">
              <SimplePage 
                title="Boards"
                content="This is example content of Boards page"
              />
            </Route>
          </Switch>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
