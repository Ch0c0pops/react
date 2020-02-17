import {combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfileReducer";
import dialogsPageReducer from "./DialogsReducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
})
const store = createStore(reducers);

export default store;