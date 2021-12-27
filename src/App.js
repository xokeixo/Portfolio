import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


function App() {


  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
