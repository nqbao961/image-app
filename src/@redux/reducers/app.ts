import { APP_REQUEST, APP_SUCCESS, APP_ERROR } from "../constants/app";

type StateType = {
  requesting: boolean;
};

type PayloadType = {
  type: string;
};

const initialState: StateType = {
  requesting: false,
};

function appReducer(state: StateType = initialState, payload: PayloadType) {
  switch (payload.type) {
    case APP_REQUEST:
      return {
        requesting: true,
      };
    case APP_SUCCESS:
      return {
        requesting: false,
      };
    case APP_ERROR:
      return {
        requesting: false,
      };

    default:
      return state;
  }
}

export default appReducer;
