import { Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

export function BaseGridItem({ children }: { children: ReactNode }) {
  return (
    <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
      <Typography>{children}</Typography>
    </Grid2>
  );
}
