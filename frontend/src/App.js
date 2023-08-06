// Dependency
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// Components
import Navbar from './components/navbar/Navbar';
// Pages
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
