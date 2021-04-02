import {
  SET_UNIT_DETAIL,
} from '../../symbols/units';
import { AnyAction } from 'redux'

export const setUnitDetail = (payload: AnyAction) => ({
  type: SET_UNIT_DETAIL,
  payload,
});
