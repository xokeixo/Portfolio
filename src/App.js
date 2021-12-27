import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Socials from './components/Socials';
// import Contact from './components/Contact';


function App() {


  return (
    <div className="App">
      <Nav />
      <Socials />
      <Header />
      <About />
      <Projects />
      {/* <Contact /> */}
      <ContactForm />
    </div>
  );
}

export default App;
