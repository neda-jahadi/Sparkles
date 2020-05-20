import { combineReducers } from 'redux';
import { reducer as listReducer } from './listReducer';
import { reducer as categoryReducer } from './categoryReducer';
import { reducer as screenReducer } from './screenReducer';

const rootReducer = combineReducers({
    list: listReducer,
    category: categoryReducer,
    screen: screenReducer
});
export { rootReducer };