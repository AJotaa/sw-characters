import { Box, Grid2, Typography } from "@mui/material";
import { BaseGridItem } from "./base-grid-item";
import { Character } from "../../redux/swapiSlice";

interface CharactersDetailsInfoProps {
  characterDetails: Character;
}

export function ModalDetailsInfo({
  characterDetails,
}: CharactersDetailsInfoProps) {
  const characterData = characterDetails && [
    { name: "Height", value: characterDetails.height },
    { name: "Mass", value: characterDetails.mass },
    { name: "Hair color", value: characterDetails.hair_color },
    { name: "Skin color", value: characterDetails.skin_color },
    { name: "Eye color", value: characterDetails.eye_color },
    { name: "Birth year", value: characterDetails.birth_year },
    { name: "Gender", value: characterDetails.gender },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography sx={{ mb: 2, fontSize: "18px", fontWeight: "500" }}>
        Details
      </Typography>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {characterData?.map((e) => (
          <BaseGridItem key={e.name}>
            {e.name}: {e.value}
          </BaseGridItem>
        ))}
      </Grid2>
    </Box>
  );
}
