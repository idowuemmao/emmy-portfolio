import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Award from "./components/Award"

function App() {
  return (
    <div className="grid min-h-screen relative bg-gradient-to-r from-blue-950 to-cyan-800">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Experience />
      <Award />
      <Footer />
    </div>
  );
}

export default App;
