import {CHARACTERS_URL} from '../../service/url';
import {getRequest} from '../../service/verb';
import {
  CAHARAKTERS_REJECT,
  FETCH_CAHARAKTERS,
  FETCH_SINGLE_CAHARAKTERS,
  PENDİNG_CAHARAKTERS,
  PENDİNG_SINGLE_CAHARAKTER,
  SINGLE_CAHARAKTERS_REJECT,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDİNG_CAHARAKTERS});
    try {
      const response = await getRequest(CHARACTERS_URL);
      dispatch({
        type: FETCH_CAHARAKTERS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: CAHARAKTERS_REJECT, error: error});
    }
  };
};

export const getSingleCharacter = characterID => {
  const url = `${CHARACTERS_URL}/${characterID}`;

  return async dispatch => {
    dispatch({type: PENDİNG_SINGLE_CAHARAKTER});
    try {
      const response = await getRequest(url);
      dispatch({
        type: FETCH_SINGLE_CAHARAKTERS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: SINGLE_CAHARAKTERS_REJECT, error: error});
    }
  };
};
