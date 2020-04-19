import React from 'react';
import {connect} from "react-redux";
import {setAuthUserData, fetchingToggle, getAuthThunkCreator} from "../Redux/AuthReducer";
import Header from "./Header";
import Loader from "../../Common/Loader";
import classes from './../Header/Header.module.css';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthThunkCreator(this.props.fetchingToggle, this.props.setAuthUserData);
    }

    render() {
        return <>
            <div className={classes.headerLoader}>{this.props.isFetching ? <Loader/> : null}</div>
            <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {setAuthUserData, fetchingToggle, getAuthThunkCreator})(HeaderContainer);