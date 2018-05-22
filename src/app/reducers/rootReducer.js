import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import modalsReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  modals: modalsReducer,
  toastr: toastrReducer
});

export default rootReducer;
