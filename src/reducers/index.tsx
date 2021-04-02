import { combineReducers, AnyAction } from 'redux';
import units from './units'

// combine all reducer to rootReducer
const appReducer = combineReducers({
  units,
});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;