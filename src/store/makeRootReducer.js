import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export const makeRootReducer = () => combineReducers({
  form: reduxFormReducer
});
