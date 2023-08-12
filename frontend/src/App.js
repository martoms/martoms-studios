// Dependency
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// Components
import Navbar from './components/navbar/Navbar';
// Pages
import Home from './pages/Home';
import Footer from './components/Footer';
import WebDevProjects from './pages/WebDevProjects';
import WebDevProjectDetails from './pages/WebDevProjectDetails';

function App() {

  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projects/web-development' element={<WebDevProjects />} />
            <Route path='/projects/web-development/:id' element={<WebDevProjectDetails />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
