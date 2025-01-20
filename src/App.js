import "./App.css";
import About from "./components/about/About.jsx";
import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/skills/Skills.jsx";
function App() {
  return (
    <>
      <Router>
        {" "}
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
        </main>
      </Router>
    </>
  );
}

export default App;
