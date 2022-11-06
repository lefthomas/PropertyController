import "./App.css";

import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
