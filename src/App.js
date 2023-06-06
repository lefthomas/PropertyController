import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";

import Transfer from "./views/Transfer/Transfer";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Hold from "./views/Hold/Hold";
import Watch from "./views/Watch/Watch";
import Scan from "./views/Scan/Scan";
import NotFound from "./views/NotFound/NotFound";
import SideBar from "./components/SideBar/SideBar";
import TopNav from "./components/TopNav/TopNav";
import HoldSideBar from "./views/Hold/HoldSideBar/HoldSideBar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div className="App">
      <TopNav />
      {isMobile ? null : (
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="/hold" element={<HoldSideBar />} />
        </Routes>
      )}
      <Routes>
        <Route path="/" element={<Transfer />} />
        <Route path="/hold" element={<Hold />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
