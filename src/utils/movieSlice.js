import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    moviesList: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovies, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
