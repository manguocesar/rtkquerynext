import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddListSliceState {
  value:  Text[] 
  status: "idle" | "loading" | "failed";
}

type Text = {
  text: string, id: number}

const initialState: AddListSliceState = {
  value: [
    {text: "ex 1", id: 1},
    {text: "ex 2", id: 2},
    ],
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const addListSlice = createAppSlice({
  name: "addList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    addToList: create.reducer((state,action: PayloadAction<Text>) => {
      state.value.push(action.payload);
    }),
    rmToList: create.reducer((state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.value = state.value.filter((element) => element.id !== action.payload);
    }),
    // decrement: create.reducer((state) => {
    //   state.value -= 1;
    // }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    // incrementByAmount: create.reducer(
    //   (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
    // ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectAddList: (addList) => addList.value,
    selectStatus: (addList) => addList.status,
  },
});

// Action creators are generated for each case reducer function.
export const { addToList, rmToList } =
addListSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectAddList, selectStatus } = addListSlice.selectors;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    // const currentValue = selectAddList(getState());

    // if (currentValue % 2 === 1 || currentValue % 2 === -1) {
    //   dispatch(incrementByAmount(amount));
    // }
  };
