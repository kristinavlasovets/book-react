import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";

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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
