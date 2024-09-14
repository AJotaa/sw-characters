import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { changePage } from "../redux/swapiSlice";
import { Pagination, Stack } from "@mui/material";

export function PaginationControls() {
  const dispatch = useDispatch<AppDispatch>();
  const { page, totalPages } = useSelector((state: RootState) => state.swapi);

  function handleChange(_event: React.ChangeEvent<unknown>, value: number) {
    dispatch(changePage(value));
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mx: "auto",
        width: "fit-content",
        mt: 1,
        backgroundColor: "#ffc50017",
        borderRadius: "20px",
      }}
    >
      <Pagination
        count={totalPages || 1}
        color="primary"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",
          },
        }}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
