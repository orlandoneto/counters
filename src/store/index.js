import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  timeout: null,
  debounce: 100,
  stateReconciler: autoMergeLevel2,
  whitelist: ['counter'],
  //blacklist: ['counter'],
};

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({ ...rootReducer });
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);
export { store, persistor };
