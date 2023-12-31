// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

// const store = configureStore({
//    reducer: rootReducer,
// });

// const { dispatch } = store;

// export { store, dispatch };

import { configureStore } from '@reduxjs/toolkit';
import  { rootReducer } from './reducer';

const store = configureStore(
   {
      reducer:rootReducer,
   }
);
const{dispatch}=store;
export {store,dispatch};

export default store;
