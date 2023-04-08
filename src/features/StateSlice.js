import { createSlice } from "@reduxjs/toolkit";
const startup  = JSON.parse(localStorage.getItem("bookmark")) || [];
console.log(startup+"asfd")
export const StateSlice = createSlice({
  name: "state",
  initialState: {
    homeToggle: true,
    randomQuote: "",
    bookmark: startup,
  },
  reducers: {
    toggleHome: (state, action) => {
      state.homeToggle = action.payload;
    },
    toggleBookmark: (state) => {
      state.randomQuote.isBookmark = !state.randomQuote.isBookmark;
    },
    setRandomQuote: (state, action) => {
      console.log(action);
      state.randomQuote = { ...action.payload, isBookmark: false };
    },
    addBookmark: (state, action) => {
      state.bookmark.unshift({
        ...action.payload,
        isBookmark: true,
      });
      console.log(state.bookmark);
      localStorage.setItem("bookmark", JSON.stringify(state.bookmark));
    },
    deleteBookmark: (state, action) => {
      let i;
      state.bookmark.forEach((arr, index) => {
        if (arr._id === action.payload._id) {
          i = index;
        }
      });
      state.bookmark.splice(i, 1);
      localStorage.setItem("bookmark", JSON.stringify(state.bookmark));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleHome,
  setRandomQuote,
  toggleBookmark,
  addBookmark,
  deleteBookmark,
} = StateSlice.actions;

export default StateSlice.reducer;
