import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
