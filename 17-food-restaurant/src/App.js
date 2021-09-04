import { BrowserRouter as Router } from 'react-router-dom';
import Features from './components/Features';
import Hero from './components/Hero';
import Products from './components/Product';
import { GlobleStyles } from './GlobleStyles';
import { productData, productDataTwo } from './data';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobleStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Features />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
