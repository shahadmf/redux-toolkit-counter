import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counter/counterSlice";

export interface RootState {
    counterR: {
      count: number;
    };
    }
    
export const store = configureStore({
    reducer: {
        counterR: counterReducer,
    }
})

