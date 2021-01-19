import React from 'react';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import SiteNavigation from './components/SiteNavigation';
import BlogListContainer from './containers/BlogListContainer';
import BlogPostContainer from './containers/BlogPostContainer';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';

function App() {
  return(
    <>
      <Router>
        <GlobalStyle />
        <SiteNavigation />
        <Switch>
          <Route path='/about' component={AboutContainer} />
          <Route path='/contact' component={ContactContainer} />
          <Route path='/blog/:slug' component={BlogPostContainer} />
          <Route path='/blog' component={BlogListContainer} />
          <Route path='/' component={HomeContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;