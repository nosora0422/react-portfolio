import './dist/output.css';
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
        <Contact />
      </div>
      <Footer />
    </div>
  );
}