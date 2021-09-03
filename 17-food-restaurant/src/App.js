import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Product';
import { GlobleStyles } from './GlobleStyles';

function App() {
  return (
    <Router>
      <GlobleStyles />
      <Hero />
      <Products heading="Choose your favorite" />
    </Router>
  );
}

export default App;
