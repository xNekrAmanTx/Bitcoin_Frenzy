import { applyMiddleware, createStore } from "redux";
import rootReducer from './rootReducer';
import { historyMiddleWare } from './history/historyMiddleWare';

export const store = createStore(rootReducer, applyMiddleware(historyMiddleWare))
