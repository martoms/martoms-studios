// Dependency
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// Components
import Navbar from './components/navbar/Navbar';
// Pages
import Home from './pages/Home';
import Footer from './components/Footer';
import WebDevProjects from './pages/WebDevProjects';
import WebDevProjectDetails from './pages/WebDevProjectDetails';
import GraphicDesignProjects from './pages/GraphicDesignProjects';
import GraphicDesignProjectDetails from './pages/GraphicDesignProjectDetails';
import AboutMe from './pages/AboutMe';
import AllMessages from './pages/AllMessages';
import OpenMessage from './pages/OpenMessage';

function App() {

  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projects/web-development' element={<WebDevProjects />} />
            <Route path='/projects/web-development/:id' element={<WebDevProjectDetails />} />
            <Route path='/projects/graphic-design' element={<GraphicDesignProjects />} />
            <Route path='/projects/graphic-design/:category' element={<GraphicDesignProjectDetails />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/admin' element={<AllMessages />} />
            <Route path='/admin/:id' element={<OpenMessage />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
