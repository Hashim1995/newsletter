import Style from "./ItemList.module.scss";
import Grid from "@mui/material/Grid";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
const ItemList = () => {
  // general data from redux store
  const data = useSelector((state) => state.data.value);

  // search query value from from redux store
  const searchValue = useSelector((state) => state.searchValue.value);

  // filtered data,  default value is "data"
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      let res = data.filter((item, index) => {
        if (
          item.title.includes(searchValue) ||
          item.summary.includes(searchValue)
        ) {
          return true;
        }
      });
      console.log(res.length);
      setFilteredData(res);
    }
  }, [data, searchValue]);

  return (
    <div className={Style.wrap}>
      <Typography className={Style.result} variant="h6">
        {filteredData &&
          searchValue.length > 0 &&
          `Results: ${filteredData.length}`}
      </Typography>
      <hr />
      <Grid container spacing={6} columns={24}>
        {filteredData &&
          filteredData.map((item) => (
            <Grid key={item.title} item lg={8} md={12} xs={24} xl={8}>
              <Item data={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ItemList;
