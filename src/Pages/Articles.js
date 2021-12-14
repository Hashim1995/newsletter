import Style from "./Articles.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Calendar from "../Assets/icons/calendar.svg";
const Articles = () => {
  const data = useSelector((state) => state.data.value);
  const { articleSlug } = useParams();

  const {
    title,
    summary: description,
    imageUrl: img,
    publishedAt: date,
  } = data.find((item) => item.title === articleSlug);
  return (
    <div cl>
      <img src={img} alt="" />

      <div className={`${Style.wrap} container`}>
        <h1>{title}</h1>
        <h6 className={Style.date}>
          {" "}
          <img className={Style.icon} src={Calendar} alt="" />{" "}
          {date.substring(0, 10)}
        </h6>
        <p>{description}</p>

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
    </div>
  );
};

export default Articles;
