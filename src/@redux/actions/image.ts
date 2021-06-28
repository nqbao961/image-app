import {
  GET_IMAGE_FROM_QUERY_REQUEST,
  GET_IMAGE_FROM_QUERY_SUCCESS,
  GET_IMAGE_FROM_QUERY_ERROR,
} from "../constants/image";
import { APP_REQUEST, APP_SUCCESS, APP_ERROR } from "../constants/app";

import { getImagesFromQuery } from "../../api/unsplash";
import { Dispatch } from "redux";

export const getImages =
  (input: string, page: number) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_IMAGE_FROM_QUERY_REQUEST });
      dispatch({ type: APP_REQUEST });
      const response = await getImagesFromQuery(input, page);
      const responseBody = await response.data;
      dispatch({
        type: GET_IMAGE_FROM_QUERY_SUCCESS,
        data: responseBody,
      });
      dispatch({ type: APP_SUCCESS });
    } catch (error) {
      console.error(error);
      dispatch({
        type: GET_IMAGE_FROM_QUERY_ERROR,
        message: error,
      });
      dispatch({ type: APP_ERROR });
    }
  };
