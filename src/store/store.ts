import{configureStore} from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";


export const store=configureStore({
    reducer:{
        user:useReducer
    }
});

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>