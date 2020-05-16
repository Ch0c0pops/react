import {getAuthThunkCreator} from "./AuthReducer";

const APP_IS_INITIALISED = 'APP_IS_INITIALISED';

let initialReducer = {
    initialised: false
};

const appReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case APP_IS_INITIALISED:
            return {
                ...state,
                initialised: true
            }
        default:
            return state;
    }
}

export const appIsInitialised = () => {
    return {type: APP_IS_INITIALISED}
};

export const appIsInitialisedTC = () => (dispatch) => {
    let promise = dispatch(getAuthThunkCreator());
    Promise.all([promise]).then(()=>{dispatch(appIsInitialised())})
};

export default appReducer;