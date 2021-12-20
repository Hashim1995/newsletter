import Style from "./Articles.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Calendar from "../Assets/icons/calendar.svg";
const Articles = () => {
  const secen = useSelector;
  const { articleSlug } = useParams();
  const slug = Number(articleSlug);
  const [resData, setResData] = useState(null);

  const load = async () => {
    let data = await secen((state) => state.data.value);
    if (data) {
      const obj = data.find((item) => item.id === slug);
      setResData(obj);
      console.log(resData);
    }
  };
  load();

  return (
    <div className={Style.main}>
      {resData && (
        <>
          <img
            className={Style.background}
            src={resData.imageUrl}
            alt={resData.title}
          />

          <div className={`${Style.wrap} container`}>
            <h1>{resData.title}</h1>
            <h6 className={Style.date}>
              {" "}
              <img className={Style.icon} src={Calendar} alt="" />{" "}
              {resData.publishedAt.substring(0, 10)}
            </h6>
            <img
              className={Style.newImg}
              src={resData.imageUrl}
              alt={resData.title}
            />
            <p>{resData.summary}</p>

            <Link to="/">
              <Button
                startIcon={<KeyboardBackspaceIcon />}
                className={Style.Button}
                variant="text"
              >
                Back to home
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
