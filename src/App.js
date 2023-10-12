import "./styles/App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-black text-center min-h-screen w-full m-32 ">
      <NavBar />
      {/* <div className="flex items-start justify-between w-full mt-32 relative">
        <Banner />
        <Clock />
      </div>
      <Skills />
      <Projects /> */}
    </div>
  );
}

export default App;
