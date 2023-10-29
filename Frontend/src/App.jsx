import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Component_Navbar'; // Import your Navbar component
import HomePage from './pages/home/Home'; // Import your HomePage component
import Login from './pages/Login/Login'; // Import the Login component
import Cart from "./pages/Cart/Cart"; // Import the Cart component
import Contact from "./pages/Contact/Contact"; // Import the Contact component
import Shop from './pages/Shop/Shop'; // Import the Shop component
import Footer from './component/Footer'; // Import your Footer component
import About from "./pages/about/About"; // Import the About component

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop" component={Shop} />
        
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

