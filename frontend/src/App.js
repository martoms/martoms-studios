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
import ContactPage from './pages/ContactPage';
import WebDevSkills from './pages/WebDevSkills';
import GraphicDesignSkills from './pages/GraphicDesignSkills';
import Title from './components/Title';
import { CertificateOnly, CertificateWithLinks, CertificateWithLinksAboutPage } from './pages/Certificates';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
      <Router>
          <Navbar/>
          <Title />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projects/web-development' element={<WebDevProjects />} />
            <Route path='/projects/web-development/:id' element={<WebDevProjectDetails />} />
            <Route path='/projects/web-development/certificates/:certificate' element={<CertificateOnly />} />
            <Route path='/projects/graphic-design' element={<GraphicDesignProjects />} />
            <Route path='/projects/graphic-design/:category' element={<GraphicDesignProjectDetails />} />
            <Route path='/skills/web-development' element={<WebDevSkills />} />
            <Route path='/skills/web-development/:certificate' element={<CertificateWithLinks />} />
            <Route path='/skills/graphic-design' element={<GraphicDesignSkills />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/about/:certificate' element={<CertificateWithLinksAboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/admin' element={<AllMessages />} />
            <Route path='/admin/:id' element={<OpenMessage />} />
            <Route path='*' element={ <PageNotFound/> } />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
