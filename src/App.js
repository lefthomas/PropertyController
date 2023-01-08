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
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <TopNav />
      <Routes>
        <Route path="/" element={<SideBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Transfer />} />
        <Route path="/hold" element={<Hold />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
