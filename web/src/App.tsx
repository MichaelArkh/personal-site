import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router'
import Home from './pages/home'
import Experience from './pages/experience'
import Publications from './pages/publications';
import Projects from './pages/projects';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactGA from "react-ga4";

const App: React.FC = () => {
        const client = new ApolloClient({
          uri: import.meta.env.VITE_EXPRESS_SERVER_ADDR,
          cache: new InMemoryCache(),
        });
      
        const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (gaMeasurementId) {
          ReactGA.initialize(gaMeasurementId);
        } else {
          console.error("Google Analytics measurement ID is not defined in the environment variables.");
        }

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/pub" element={<Publications />} />
            <Route path="/proj" element={<Projects />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
