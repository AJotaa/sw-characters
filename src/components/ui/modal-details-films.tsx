import { Box, Typography } from "@mui/material";
import { films_imgs } from "../../assets/img/films";

interface CharacterDetailsFilmsProps {
  films: string[];
}

export function ModalDetailsFilms({ films }: CharacterDetailsFilmsProps) {
  const filmsList = films?.map((e) => {
    return parseInt(e.split("/").reverse()[1]);
  });

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontSize: "18px", fontWeight: "500" }}
      >
        Movies
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {filmsList?.map((filmId) => (
          <img
            key={filmId}
            src={films_imgs[filmId as keyof typeof films_imgs]}
            alt={`film ${filmId}`}
            style={{ width: "70px" }}
          />
        ))}
      </Box>
    </Box>
  );
}
