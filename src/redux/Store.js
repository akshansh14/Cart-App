import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

export const Store=configureStore(
 {   reducer:{
        Cart:CartSlice.reducer,
    }
}
)