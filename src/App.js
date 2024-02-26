import './dist/output.css';
import Header from './Shared/Header/Header';
import Contact from './Components/Contact/Contact';
import Footer from './Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => (
    setIsDark(isDark => !isDark)
  )
  return (
    <div className={isDark ? 'relative dark' : 'relative light'}>
      <Header />
      <div>
        <ScrollToTop />
        <Outlet context={isDark}/>
        <Contact />
      </div>
      <Footer />
      <button
        className="fixed right-5 bottom-5 w-11 h-11 rounded-full font-medium -bg--primary -text--secondary"
        onClick={handleDark}>{isDark ?  'LHT' : 'DRK'}
      </button>  
    </div>
  );
}