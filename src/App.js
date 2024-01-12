import './dist/output.css';
import './flickity.min.css';
import Header from './Shared/Header/Header';
import Contact from './Components/Contact/Contact';
import Footer from './Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
        <Contact 
            github='http://www.linkedin.com/in/sora-noh'
            email='mailto:nosora0422@gmail.com'
            linkedin='http://github.com/nosora0422'
        />
      </div>
      <Footer />
    </div>
  );
}