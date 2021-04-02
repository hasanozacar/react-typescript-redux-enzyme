import {
  GET_UNITS,
  GET_UNITS_FAILURE,
  GET_UNITS_SUCCESS
} from '../../symbols/units';
import { AnyAction } from 'redux'

export const getUnitsAction = (payload?: AnyAction) => ({
  type: GET_UNITS,
  payload,
});

export const getUnitsActionSuccess = (data: any) => ({
  type: GET_UNITS_SUCCESS,
  data,
});

export const getUnitsActionFailure = (error: boolean) => ({
  type: GET_UNITS_FAILURE,
  error,
});
