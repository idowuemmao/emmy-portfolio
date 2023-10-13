import "./styles/App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-black min-h-screen">
      <div className=" w-full mb-32">
        <NavBar />
      </div>
      <Banner />
    </div>
  );
}

export default App;
