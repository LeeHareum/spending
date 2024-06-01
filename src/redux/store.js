import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expensesSlice";

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});

export default store;
