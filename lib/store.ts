import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { addListSlice } from "./features/addList/addListSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { postsApiSlice } from "./features/posts/postsApiSlice";
import { countriesApiSlice } from "./features/countries/CountriesApiSlice";

const rootReducer = combineSlices(
  counterSlice,
  addListSlice,
  quotesApiSlice,
  postsApiSlice,
  countriesApiSlice
);

export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
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

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
