import Header from './Header';
import Navbar from './components/navbar';
import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
        <Navbar/>
        <Intro/> 
        <Skills/>
    </div>
    </>
  );
}

export default App;
