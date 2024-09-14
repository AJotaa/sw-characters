import { Box, Skeleton } from "@mui/material";

interface BaseListSkeleton {
  gridColumns: string;
}
const holderArr = new Array(10).fill(0);

export function BaseListSkeleton({ gridColumns }: BaseListSkeleton) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: gridColumns,
        gap: "16px",
        mt: 2,
        justifyItems: "center",
        "@media (max-width: 600px)": {
          gridTemplateColumns: "1fr",
        },
      }}
    >
      {holderArr.map((_, i) => (
        <Skeleton
          variant="rounded"
          height={80}
          width={200}
          key={i}
          sx={{ bgcolor: "grey.900" }}
        />
      ))}
    </Box>
  );
}
