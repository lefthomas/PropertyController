import "./App.css";

import Transfer from "./views/Transfer/Transfer";
import Hold from "./views/Hold/Hold";
import Watch from "./views/Watch/Watch";
import Scan from "./views/Scan/Scan";
import NotFound from "./views/NotFound/NotFound";
import SideBar from "./components/SideBar/SideBar";
import TopNav from "./components/TopNav/TopNav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<SideBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Transfer />} />
        <Route path="/hold" element={<Hold />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
