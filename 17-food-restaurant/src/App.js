import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobleStyles } from './GlobleStyles';

function App() {
  return (
    <Router>
      <GlobleStyles />
      <Hero />
    </Router>
  );
}

export default App;
