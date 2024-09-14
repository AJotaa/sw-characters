import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { Container } from "@mui/material";
import { Hero } from "./components/hero";
import { SearchField } from "./components/search-field";
import { CharactersList } from "./components/characters-list";
import { PaginationControls } from "./components/pagination-controls";
import { CharacterModal } from "./components/character-modal";
import { fetchCharacters } from "./redux/fetchData";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { page, query, modalOpen } = useSelector(
    (state: RootState) => state.swapi
  );

  useEffect(() => {
    dispatch(fetchCharacters({ query: query, page: page }));
  }, [dispatch, page, query]);

  return (
    <Container sx={{ py: 5 }}>
      <Hero />
      <SearchField />
      <CharactersList />
      <PaginationControls />
      {modalOpen && <CharacterModal />}
    </Container>
  );
}

export default App;
