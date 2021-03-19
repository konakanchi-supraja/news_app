import { ActionTypes } from "./ActionTypes/asyncActions";

export const requestData = (data) => {
    return {
      type: actionTypes.GET_THE_DATAs,
      payload: data
    };
  };