import Navbar from './components/navbar';
import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';
import Works from './components/works';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="App">
    <div className='gradient_background'>
        <Navbar/>
        <Intro/> 
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
    </div>
    </>
  );
}

export default App;
