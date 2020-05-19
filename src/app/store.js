import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../redux/reducer";
 import { createEpicMiddleware } from "redux-observable";
import epicWords from "../epics/epics";

const epicMiddleware = createEpicMiddleware(); 

export default configureStore({
  reducer,
   middleware: [epicMiddleware], 
});
 epicMiddleware.run(epicWords); 
