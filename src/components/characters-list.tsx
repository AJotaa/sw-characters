import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, List, ListItem, Typography } from "@mui/material";
import { BaseListSkeleton } from "./ui/base-list-skeleton";
import { BaseCard } from "./ui/base-card";

const gridColumns = "repeat(3, 1fr)";

export function CharactersList() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.swapi
  );

  if (loading) {
    return <BaseListSkeleton gridColumns={gridColumns} />;
  }

  return (
    <Box>
      {data.length > 0 && (
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: gridColumns,
            gap: "4px",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {data.map((e) => (
            <ListItem key={e.name}>
              <BaseCard character={e} />
            </ListItem>
          ))}
        </List>
      )}
      {data.length === 0 && (
        <Typography variant="h6" sx={{ my: 5 }}>
          {error || "Sorry, no characters found..."}
        </Typography>
      )}
    </Box>
  );
}
