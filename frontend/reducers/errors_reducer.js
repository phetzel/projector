import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import showErrorsReducer from './show_errors_reducer';
import movieErrorsReducer from './movie_errors_reducer';

export default combineReducers({
    sessionErrors: sessionErrorsReducer,
    showErrors: showErrorsReducer,
    movieErrors: movieErrorsReducer
});
