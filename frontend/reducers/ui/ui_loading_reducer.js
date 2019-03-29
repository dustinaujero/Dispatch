import { LOADING, CLEAR_LOADING } from "../../actions/ui_actions";


const uiLoadingReducer = (state = false, action) => {

    switch(action.type) {

        case LOADING: {
            return true;
        }
        case CLEAR_LOADING: {
            return false;
        }
        default: return state;
    }
}

export default uiLoadingReducer;