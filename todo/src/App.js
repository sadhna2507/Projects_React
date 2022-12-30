import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
// import Navbar from './components/Navbar';
import Home from "./components/Home";
import View from "./components/View";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
