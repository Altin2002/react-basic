import './App.scss';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
