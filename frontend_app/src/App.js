import logo from './logo.svg';
import './App.scss';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Home, NotFound } from './pages';
const { About, Contact, Education } = React.lazy(() => import('./pages'));
const { Skills, Testimonials, Header, Footer } = React.lazy(() => import('./containers'));

function App() {
  return (
    /*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    */
    <div className="App">
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading..</div>} >
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
