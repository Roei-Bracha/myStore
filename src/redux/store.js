import { createStore, applyMiddleware, compose } from 'redux';
import logger from "redux-logger";

import rootReducer from "./root-reducer"

const middlewares = [logger];

let composeEnhancers;
if(process.env.NODE_ENV !== "production"){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
else{
  composeEnhancers = compose;
}

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)));

export default store;