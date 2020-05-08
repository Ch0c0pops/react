/*
import React from 'react' ;
import {connect} from "react-redux";
import Login from "./Login";
import {loginThunkCreator} from "../Redux/AuthReducer";

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

let mapDispatchToProps = (dispatch) => {            //контейнер до логинизации
    return {
        loginThunk: (data) => {
            dispatch(loginThunkCreator(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
*/
