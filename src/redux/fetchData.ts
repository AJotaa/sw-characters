import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://swapi.dev/api/people/";

export const fetchCharacters = createAsyncThunk(
  "swapi/fetchCharacters",
  async ({ query, page }: { query: string; page: number }) => {
    const url = `${BASE_URL}?${query ? "search=" + query : "page=" + page}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      data: data.results,
      count: data.count,
    };
  }
);

export const fetchCharacterDetails = createAsyncThunk(
  "swapi/fetchCharacterDetails",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
