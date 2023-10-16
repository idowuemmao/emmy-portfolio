import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="grid body bg-black relative gap-24">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
