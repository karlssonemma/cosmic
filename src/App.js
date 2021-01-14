import React from 'react';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import SiteNavigation from './components/SiteNavigation';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return(
    <>
      <Router>
      <SiteNavigation />
        <Switch>
          <Route path='/about'>
            <AboutContainer />
          </Route>
          <Route path='/contact'>
            <ContactContainer />
          </Route>
          <Route path='/'>
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;