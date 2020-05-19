import { combineReducers } from 'redux';
import { reducer as listReducer } from './listReducer';

const rootReducer = combineReducers({
    list: listReducer
});
export { rootReducer };