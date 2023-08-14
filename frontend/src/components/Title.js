import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitleFromRoute(location.pathname);
  }, [location]);

  const getTitleFromRoute = (path) => {
    switch (path) {
        case '/':
          return 'Martoms Studios | Home';
        case '/admin':
          return 'Martoms Studios | Admin';
        case '/admin/:id':
        return 'Martoms Studios | Admin';
        case '/projects/web-development':
          return 'Martoms Studios | Projects';
        case '/projects/web-development/:id':
          return 'Martoms Studios | Web Development';
        case '/projects/graphic-design':
          return 'Martoms Studios | Projects';
        case '/projects/graphic-design/:category':
          return 'Martoms Studios | Graphic Design';
        case '/skills/web-development':
          return 'Martoms Studios | Skills';
        case '/skills/graphic-design':
          return 'Martoms Studios | Skills';
        case '/about':
          return 'Martoms Studios | About';
        case '/contact':
            return 'Martoms Studios | Contact';
        default:
          return 'Martoms Studios';
      }
  };

  return null; 
};

export default Title;
