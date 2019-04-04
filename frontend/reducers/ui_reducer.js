import { combineReducers } from 'redux';
import uiLoadingReducer from './ui/ui_loading_reducer';
import uiCurrentServerReducer from './ui/ui_curr_server_reducer';

export default combineReducers({
    loading: uiLoadingReducer,
    // currentServer: uiCurrentServerReducer
});