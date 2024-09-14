import { Box } from "@mui/material";
import logo from "../assets/img/sw_logo.svg";

export function Hero() {
  return (
    <Box sx={{ width: "100%", maxWidth: "300px", margin: "auto" }}>
      <img src={logo} alt="" style={{ width: "100%", margin: "auto" }} />
    </Box>
  );
}
