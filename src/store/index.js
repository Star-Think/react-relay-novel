import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // sessionStorage
import user from "../reducers/user";

const rootReducer = combineReducers({
  user: user,
});

const persistConfig = {
  key: "root",
  storage: storageSession, // 사용할 스토리지를 정의해요.
  whitelist: ["user"], // 유지 할 데이터를 정의해요
  // blacklist // 제외 할 데이터를 정의해요
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk],
// });

const store = createStore(persistedReducer);

export default store;
