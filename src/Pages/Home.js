import ItemList from "../Components/ItemList/ItemList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../Store/dataSlice";
import axios from "axios";
import Form from "../Components/Form/Form";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://api.spaceflightnewsapi.net/v3/articles").then((res) => {
      dispatch(setData(res.data));
    });
  });
  return (
    <div className="container">
      <Form />
      <ItemList />
    </div>
  );
};

export default Home;
