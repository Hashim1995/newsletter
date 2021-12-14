import "./Assets/Global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleSlug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
