import Style from "./ItemList.module.scss";
import Grid from "@mui/material/Grid";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ItemList = () => {
  // general data from redux store
  const data = useSelector((state) => state.data.value);

  // search query value from from redux store
  const searchValue = useSelector((state) => state.searchValue.value);

  // filtered data,  default value is "data"
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    console.log(data);
    if (data) {
      setFilteredData(
        data.filter((item) => {
          if (item.title.includes(searchValue)) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [data, searchValue]);

  return (
    <div className={Style.wrap}>
      <Grid container spacing={6} columns={24}>
        {filteredData &&
          filteredData.map((item) => (
            <Grid key={item.title} item xs={8}>
              <Item data={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ItemList;
