import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Component_Navbar'; // Import your Navbar component
import LandingPage from './JSX files/Landing_Page'; // Import your LandingPage component
import HomePage from './pages/home'; // Import your HomePage component
import Login from './pages/Login'; // Import the Login component
import Register from './pages/Register'; // Import the Register component
import Footer from './component/Footer'; // Import your Footer component

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

