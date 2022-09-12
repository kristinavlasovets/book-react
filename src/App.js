import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";
import { PageThree } from "./pages/PageThree";
import { PageFour } from "./pages/PageFour";
import { PageFive } from "./pages/PageFive";
import { PageSix } from "./pages/PageSix";
import { PageSeven } from "./pages/PageSeven";

import "./scss/app.scss";



function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pageone" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo/>} />
            <Route path="/pagethree" element={<PageThree/>} />
            <Route path="/pagefour" element={<PageFour/>} />
            <Route path="/pagefive" element={<PageFive/>} />
            <Route path="/pagesix" element={<PageSix/>} />
            <Route path="/pageseven" element={<PageSeven/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
