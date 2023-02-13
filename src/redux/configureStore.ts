import {
  AnyAction,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Reducer
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import commonReducer from '@/Slices/commonSlice';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ common: commonReducer });

const rootReducer: Reducer<ReturnType<typeof reducer>, AnyAction> = (
  state,
  action
) => {
  if (action.type === "common/setResetRedux") {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
