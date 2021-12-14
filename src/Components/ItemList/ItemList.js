import Style from "./ItemList.module.scss";
import Grid from "@mui/material/Grid";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const ItemList = () => {
  useEffect(() => {}, []);
  const data = useSelector((state) => state.data.value);
  return (
    <div className={Style.wrap}>
      <Grid container spacing={6} columns={24}>
        {data &&
          data.map((item) => (
            <Grid key={item.title} item xs={8}>
              <Item data={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ItemList;
