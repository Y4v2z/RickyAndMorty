import {
  CAHARAKTERS_REJECT,
  FETCH_CAHARAKTERS,
  PENDİNG_CAHARAKTERS,
} from '../types/characterTypes';

const initialState = {
  charakterList: [],
  pending: false,
  error: null,
};
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAHARAKTERS:
      return {
        ...state,
        charakterList: action.payload,
        pending: false,
      };
    case PENDİNG_CAHARAKTERS:
      return {
        ...state,
        pending: true,
      };
    case CAHARAKTERS_REJECT:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default characterReducer;
