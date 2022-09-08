import { ADD_USERINFO } from "./ActionTypes";

export const addUserInfo = (userInfo) => ({
  type: ADD_USERINFO,
  payload: userInfo,
});
