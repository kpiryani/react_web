import Header from './Header';
import Navbar from './components/navbar';
import './App.css';
import Intro from './components/intro';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
        <Navbar/>
        <Intro/> 
    </div>
    </>
  );
}

export default App;
