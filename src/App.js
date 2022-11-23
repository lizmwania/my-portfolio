import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/app.scss';
import Testmonials from './components/Testmonials';
import Scroll from './components/Scroll';
function App() {

  return (
    <div className='App'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testmonials /> */}
      <Contact />
      <Scroll />
    </div>
  );
}

export default App;
