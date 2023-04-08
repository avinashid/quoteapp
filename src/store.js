import { configureStore } from '@reduxjs/toolkit'
import StateSlice from './features/StateSlice'

export default configureStore({
  reducer: StateSlice,
})

// import { configureStore } from "@reduxjs/toolkit";
// import StateReducer from "./features/StateSlice";

// const bookmarkFromStorage = localStorage.getItem("bookmark");
// const initialBookmark = bookmarkFromStorage
//   ? JSON.parse(bookmarkFromStorage)
//   : [
//       {
//         content: "ealsjfasfldkj",
//         author: "nobody",
//         _id: "asdf",
//         isBookmark: true,
//       },
//     ];

// const store = configureStore({
//   reducer: {
//     state: StateReducer,
//   },
//   preloadedState: {
//     state: {
//       bookmark: initialBookmark,
//     },
//   },
// });

// export default store;
