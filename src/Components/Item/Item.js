import Style from "./Item.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
import Calendar from "../../Assets/icons/calendar.svg";
import { Link } from "react-router-dom";
const Item = ({ data }) => {
  const {
    title,
    summary: description,
    imageUrl: img,
    publishedAt: date,
  } = data;

  return (
    <div className={Style.main}>
      <Card className={Style.wrap}>
        <div className={Style.imgWrap}>
          <CardMedia
            className={Style.img}
            component="img"
            image={
              img
                ? img
                : "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"
            }
            alt={title}
          />
        </div>

        <CardContent>
          <Typography className={Style.date} variant="h5" component="div">
            <img className={Style.icon} src={Calendar} alt="" />{" "}
            {date.substring(0, 10)}
          </Typography>
          <Link to={`/article/${title}`}>
            <Typography
              title={title}
              className={Style.title}
              variant="h5"
              component="div"
            >
              {title.substring(0, 25) + "..."}
            </Typography>
          </Link>

          <Typography
            className={Style.text}
            variant="body2"
            color="text.secondary"
          >
            {description.substring(0, 100) + "..."}
          </Typography>

          <Link to={`/article/${title}`}>
            <Button
              endIcon={<ArrowRightAltIcon />}
              className={Style.Button}
              variant="text"
            >
              Read more
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
