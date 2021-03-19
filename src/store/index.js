import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import getData from "./sagas/fetchData";

const reduxLogger = createLogger({});
const sagaMiddleware = createSagaMiddleware();
var middlewares = [sagaMiddleware];
middlewares = [...middlewares, reduxLogger];

const enhancer = applyMiddleware(...middlewares);
const finalCreateStore = compose(enhancer)(createStore);
export const store = finalCreateStore(rootReducer);
sagaMiddleware.run(getData);
export default store;

