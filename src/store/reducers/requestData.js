import actionTypes from '../actionTypes';

const initialState = () => {
  return {
    storeData: [],
    loader: true,
    error: false,
  };
};

export default function (state = initialState(), action = {}) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_THE_DATA: {
      return {
        ...state,
        storeData: payload.storeData,
        loader: false,
        error: false,
      };
    }
    default:
      return state;
  }
}