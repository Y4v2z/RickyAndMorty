import {
  CAHARAKTERS_REJECT,
  FETCH_CAHARAKTERS,
  PENDİNG_CAHARAKTERS,
  SINGLE_CAHARAKTERS_REJECT,
  FETCH_SINGLE_CAHARAKTERS,
  PENDİNG_SINGLE_CAHARAKTER,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  singleCharacterPending: false,
  pending: false,
  error: null,
  singleCharacterError: null,
};
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAHARAKTERS:
      return {
        ...state,
        characterList: action.payload,
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

    case FETCH_SINGLE_CAHARAKTERS:
      return {
        ...state,
        singleCharacter: action.payload,
        singleCharacterPending: false,
      };
    case PENDİNG_SINGLE_CAHARAKTER:
      return {
        ...state,
        singleCharacterPending: true,
      };
    case SINGLE_CAHARAKTERS_REJECT:
      return {
        ...state,
        singleCharacterError: action.error,
      };

    default:
      return state;
  }
};

export default characterReducer;
