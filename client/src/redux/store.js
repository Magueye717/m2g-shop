import { applyMiddleware, createStore } from "redux";
import rootReducer from './../redux/root-reducer';
import logger from 'redux-logger';
import persistStore from "redux-persist/es/persistStore";
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from "./boutique/boutique.sagas";
import rootSaga from "./root-saga";


const sagaMiddeware = createSagaMiddleware();
const middleware = [sagaMiddeware];

if(process.env.NODE_ENV ==="development"){
    middleware.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddeware.run(rootSaga)

export const persistor = persistStore(store);

export default {store, persistor};