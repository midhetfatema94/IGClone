import { API_FAILURE, API_LOADING, API_SUCCESS, TOKEN_CHANGED } from '../actions/types';

let INITIAL_STATE = {isLoading: true, error: undefined, data: {}, accessToken: ""}

const LibraryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOKEN_CHANGED:
            console.log("token changed")
            return {state, accessToken: action.payload};
        case API_LOADING:
            console.log("service success 2")
            return INITIAL_STATE;
        case API_FAILURE:
            console.log("service success 3")
            return {state, isLoading: false, error: action.payload};
        case API_SUCCESS:
            console.log("service success 4")
            return {state, isLoading: false, data: action.payload};
        default:
            return state;
    }
}

export default LibraryReducer;