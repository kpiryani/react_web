import Navbar from "./components/navbar";
import "./App.css";
import Intro from "./components/intro";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AboutMe from "./components/aboutme"
import Skills from "./components/skills"
import Projects from "./components/projects"

function App() {
  return (
    <>
      <div className="App">
        
        {/* Added a separate container for the animated background */}
        <div className="background-container">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        {/* Kept the original content structure */}
        <div className="content">
          <Navbar />
          <Intro />
          <Skills /> 
          <Experience />
          <Projects/>
          <AboutMe />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}



export default App;

