import { combineReducers } from 'redux';

import formsList from './formsListReducer';
import form from './formReducer';

const rootReducer = combineReducers({
    formsList,
    form
});

export default rootReducer;
