import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Projects from './Views/Projects/Projects';
import Project1 from './Views/Project1/Project1';
import Project2 from './Views/Project2/Project2';
import Project3 from './Views/Project3/Project3';
import Project4 from './Views/Project4/Project4';
import Project5 from './Views/Project5/Project5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/react-note" element={<Project1 />} />
          <Route path="projects/logo-animation" element={<Project2 />} />
          <Route path="projects/responsive-website" element={<Project3 />} />
          <Route path="projects/webflow-website" element={<Project4 />} />
          <Route path="projects/email-template" element={<Project5 />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

