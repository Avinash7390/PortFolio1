import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
