import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/cocktails/:id" component={SingleCocktail} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
