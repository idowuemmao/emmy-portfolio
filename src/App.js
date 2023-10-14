import "./styles/App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-black min-h-screen relative">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
