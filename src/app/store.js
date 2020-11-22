import { configureStore } from "@reduxjs/toolkit";
//import { reducer } from "../redux/reducer";
import { rootReducer } from "../redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpics from "../epics";

const epicMiddleware = createEpicMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpics);
