import "./styles/App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Banner />
        <Clock />
      </div>
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
