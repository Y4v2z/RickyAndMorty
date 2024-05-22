import {
  CAHARAKTERS_REJECT,
  FETCH_CAHARAKTERS,
  PENDİNG_CAHARAKTERS,
  SINGLE_CAHARAKTERS_REJECT,
  FETCH_SINGLE_CAHARAKTERS,
  PENDİNG_SINGLE_CAHARAKTER,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  singleCharacterPending: true,
  pending: false,
  error: null,
  singleCharacterError: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
  // üst satır çalışmadı
};
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAHARAKTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
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
        PENDİNG_SINGLE_CAHARAKTER: false,
        singleCharacterError: action.error,
      };
    case RESET_DATA:
      return {
        ...state,
        PENDİNG_SINGLE_CAHARAKTER: false,
        singleCharacterError: null,
        singleCharacter: {},
      };
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };

    default:
      return state;
  }
};

export default characterReducer;
