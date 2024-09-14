import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacterDetails, fetchCharacters } from "./fetchData";

export interface Character {
  name: string;
  height: string;
  mass: string;
  url: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
}

export interface DataState {
  data: Character[];
  loading: boolean;
  error: string | null;
  page: number;
  query: string;
  totalPages: number;
  modalOpen: boolean;
  modalUrl: string;
  characterDetails: Character | null;
  characterLoading: boolean;
}

const initialState: DataState = {
  data: [],
  loading: true,
  error: "",
  page: 1,
  query: "",
  totalPages: 0,
  modalOpen: false,
  modalUrl: "",
  characterDetails: null,
  characterLoading: true,
};

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
    toggleModal: (state, action) => {
      state.modalOpen = action.payload;
    },
    selectCharacter: (state, action) => {
      state.modalUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        const { data, count } = action.payload;
        const totalPages = data.length > 0 ? Math.ceil(count / 10) : 0;

        state.loading = false;
        state.data = data;
        state.totalPages = totalPages;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      })
      //
      // characters detail data
      .addCase(fetchCharacterDetails.pending, (state) => {
        state.characterLoading = true;
        state.error = null;
      })
      .addCase(fetchCharacterDetails.fulfilled, (state, action) => {
        state.characterLoading = false;
        state.characterDetails = action.payload; // Almacenar los detalles del personaje
      })
      .addCase(fetchCharacterDetails.rejected, (state, action) => {
        state.characterLoading = false;
        state.error = action.error.message || "Failed to fetch character";
      });
  },
});

export const { changePage, changeQuery, toggleModal, selectCharacter } =
  swapiSlice.actions;
export default swapiSlice.reducer;
