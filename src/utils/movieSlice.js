import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovies, addTrailer, addPopularMovies, addUpcomingMovies,addTopRatedMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
