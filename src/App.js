import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/About';


function App() {


  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <About />
      <ContactForm />
    </div>
  );
}

export default App;
