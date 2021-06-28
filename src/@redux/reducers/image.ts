import {
  GET_IMAGE_FROM_QUERY_REQUEST,
  GET_IMAGE_FROM_QUERY_SUCCESS,
  GET_IMAGE_FROM_QUERY_ERROR,
} from "../constants/image";

import { getDataType } from "../../types";

type StateType = {
  requesting: boolean;
  success: boolean;
  message: string | null;
  data: getDataType | null;
};

type PayloadType = {
  type: string;
  data: getDataType;
  message: string;
};

const initialState: StateType = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};

function imageReducer(state: StateType = initialState, payload: PayloadType) {
  switch (payload.type) {
    case GET_IMAGE_FROM_QUERY_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case GET_IMAGE_FROM_QUERY_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data,
      };
    case GET_IMAGE_FROM_QUERY_ERROR:
      return {
        ...state,
        requesting: false,
        message: payload.message,
      };

    default:
      return state;
  }
}

export default imageReducer;
