import { Card, CardContent, Typography } from "@mui/material";
import {
  Character,
  selectCharacter,
  toggleModal,
} from "../../redux/swapiSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

interface CharacterType {
  character: Character;
}

export function BaseCard({ character }: CharacterType) {
  const { name, url } = character;
  const dispatch = useDispatch<AppDispatch>();

  function handleModal() {
    dispatch(toggleModal(true));
    dispatch(selectCharacter(url));
  }
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", height: "100%", cursor: "pointer" }}
      onClick={handleModal}
    >
      <CardContent sx={{ ":last-child": { paddingBottom: 2 } }}>
        <Typography variant="h6" component="div" sx={{ mb: "0px" }}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
