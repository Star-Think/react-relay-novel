import { createStore } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // sessionStorage
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: storageSession, // 사용할 스토리지를 정의해요.
  whitelist: ["user"], // 유지 할 데이터를 정의해요
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;
