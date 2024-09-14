import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeQuery } from "../redux/swapiSlice";

const searchStyles = {
  "& .MuiInputBase-root": {
    color: "white", // Color de fondo del campo de texto
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Color del borde
    },
    "&:hover fieldset": {
      borderColor: "white", // Color del borde al pasar el mouse
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffc500", // Color del borde cuando está enfocado
    },
  },
  "& .MuiInputLabel-root": {
    color: "white", // Color del label
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffc500", // Color del label cuando está enfocado
  },
};

export function SearchField() {
  const dispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeout(() => {
      dispatch(changeQuery(e.target.value));
    }, 1000);
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 500, mx: "auto", my: 1 }}>
      <TextField
        fullWidth
        label="Search"
        id="search"
        sx={searchStyles}
        onChange={handleChange}
      />
    </Box>
  );
}
