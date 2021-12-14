import Style from "./Form.module.scss";
import { TextField, IconButton, FormControl } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { SearchOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../Store/searchSlice";
import { useState } from "react";
const Form = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState(null);

  const formHandler = (e) => {
    console.log(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <div className="container">
      <div className={Style.wrap}>
        <Typography className={Style.title} variant="h6">
          Filter by keywords
        </Typography>
        <FormControl style={{ width: "600px" }}>
          <TextField
            onChange={formHandler}
            fullWidth
            className={Style.inputWrap}
            variant="outlined"
            placeholder="Search any word now"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
        </FormControl>
        <Typography className={Style.result} variant="h6">
          Results: 6
        </Typography>
        <hr />
      </div>
    </div>
  );
};

export default Form;
