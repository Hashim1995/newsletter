import "./Assets/Global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./Store/dataSlice";
import axios from "axios";
import Articles from "./Pages/Articles";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://api.spaceflightnewsapi.net/v3/articles").then((res) => {
      dispatch(setData(res.data));
    });
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:articleSlug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
