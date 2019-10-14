import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// import { fetchCollectionsStart } from "./shop/shop.saga";

const sagaMiddleware = createSagaMiddleware();
// const middleware = [thunk];
const middleware = [sagaMiddleware];

//logger only for development mode
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
