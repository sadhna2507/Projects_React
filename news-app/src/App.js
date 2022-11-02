// import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Headline } from "./components/Headline";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Headline" element={<Headline />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
