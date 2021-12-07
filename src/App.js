import "./Assets/Global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
