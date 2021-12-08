import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import './App.css';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import NotFound from "./Components/Common/NotFound/NotFound";
import Home from './Components/Home/Home';
import Contact from "./Components/Contact/Contact";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";
import AllProjects from "./Components/AllProjects/AllProjects";
import Skills from "./Components/Skills/Skills";
import initializeFirebase from "./firebase/firebase.init/firebase.init";

initializeFirebase();

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* <Route path="/projects/project/:id" element={<ProjectDetail />} /> */}
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
