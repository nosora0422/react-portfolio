import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Projects from './Views/Projects/Projects';
import Project from './Views/Project/Project';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/project-details/:id" element={<Project />} />
        </Route>
    </Routes>
  </HashRouter>
);

