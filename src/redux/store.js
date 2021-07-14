import { applyMiddleware, createStore } from "redux";
import rootReducer from './../redux/root-reducer';
import logger from 'redux-logger';
import persistStore from "redux-persist/es/persistStore";

const middleware = [logger];


export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default {store, persistor};