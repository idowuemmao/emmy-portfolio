import "./styles/App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Banner />
        <Clock />
      </div>
    </div>
  );
}

export default App;
