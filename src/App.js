import "./App.css";
import About from "./components/about/About.jsx";
import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Contact from "./components/contact/Contact.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import CSS for Toastify
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/Scrollup.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </Router>

      {/* ToastContainer must be included once at the root of your app */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
