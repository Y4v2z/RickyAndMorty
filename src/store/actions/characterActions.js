import {CHARACTERS_URL} from '../../service/url';
import {getRequest} from '../../service/verb';
import {
  CAHARAKTERS_REJECT,
  FETCH_CAHARAKTERS,
  PENDİNG_CAHARAKTERS,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDİNG_CAHARAKTERS});
    try {
      const response = await getRequest(CHARACTERS_URL);
      dispatch({
        type: FETCH_CAHARAKTERS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({type: CAHARAKTERS_REJECT, error: error});
    }
  };
};
