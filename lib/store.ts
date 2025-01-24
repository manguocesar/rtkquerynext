import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { addListSlice } from "./features/addList/addListSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { postsApiSlice } from "./features/posts/postsApiSlice";
import { countriesApiSlice } from "./features/countries/CountriesApiSlic";

const rootReducer = combineSlices(
  counterSlice,
  addListSlice,
  quotesApiSlice,
  postsApiSlice,
  countriesApiSlice
);

export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` creates a new store for every request
// required for Next & RSC
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(quotesApiSlice.middleware)
        .concat(postsApiSlice.middleware)
        .concat(countriesApiSlice.middleware);
    },
  });
};

// Types for Redux Toolkit
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
