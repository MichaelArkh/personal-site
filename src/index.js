import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HomeScreen from './components/pages/HomeScreen.js'
import Experience from './components/pages/Experience.js'
import Projects from './components/pages/Projects.js'
import Contact from './components/pages/Contact.js'
import ReactGA from "react-ga4";

ReactGA.initialize(window.env.G_KEY);
ReactGA.send("pageview");

ReactDOM.render(
    <Router>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/exp' component={Experience} />
      <Route path='/proj' component={Projects} />
      <Route path='/contact' component={Contact} />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
