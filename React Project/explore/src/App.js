import Navbar from "./components/navbar";
import "./App.css";
import Intro from "./components/intro";
import Experience from "./components/experience";
import Works from "./components/works";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AboutMe from "./components/aboutme"
import Skills from "./components/skills"

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient_background">
          <Navbar />
          <Intro />
          <AboutMe />
          <Experience />
          <Works />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
