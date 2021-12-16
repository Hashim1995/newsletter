import Style from "./Form.module.scss";
import { TextField, IconButton, FormControl } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { SearchOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../Store/searchSlice";
const Form = () => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
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
    </div>
  );
};

export default Form;
