import {
  FILTER_UNIT,
} from '../../symbols/units';
import { FilterType } from '../../types/dataTypes';

export const filterUnitAction = (payload: FilterType) => ({
  type: FILTER_UNIT,
  payload,
});
