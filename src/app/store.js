import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../features';
import { createEpicMiddleware } from 'redux-observable';
import rootEpics from '../epics';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpics);
