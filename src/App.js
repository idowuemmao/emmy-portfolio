import "./styles/App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Banner />
        <Clock />
      </div>
      <Skills/>
    </div>
  );
}

export default App;
