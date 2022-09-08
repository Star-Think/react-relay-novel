import * as type from "../actions/ActionTypes";

const userState = {
  userInfo: {},
};

const user = (state = userState, action = {}) => {
  switch (action.type) {
    case type.ADD_USERINFO:
      return {
        ...state,
        userInfo: { ...action.data },
      };

    default:
      return state;
  }
};

export default user;
