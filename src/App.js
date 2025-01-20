import "./App.css";
import About from "./components/about/About.jsx";
import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        {" "}
        <Header />
        <main className="main">
          <Home />
          <About />
        </main>
      </Router>
    </>
  );
}

export default App;
