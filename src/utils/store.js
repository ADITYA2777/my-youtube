import {configureStore} from "@reduxjs/toolkit"
import appslice from "./appslice";
import searchslice from "./Searchslice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchslice,
    chat: chatSlice,
  },
});

export default store;