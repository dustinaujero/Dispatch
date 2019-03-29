import { combineReducers } from 'redux';
import uiLoadingReducer from './ui/ui_loading_reducer';

export default combineReducers({
    loading: uiLoadingReducer
});