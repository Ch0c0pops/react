import React from 'react';
import {connect} from "react-redux";
import {setAuthUserData, fetchingToggle} from "../Redux/AuthReducer";
import * as axios from "axios";
import Header from "./Header";
import Loader from "../../Common/Loader";
import classes from'./../Header/Header.module.css';

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.fetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
            .then(response => {
                this.props.fetchingToggle(false);
                if(response.data.resultCode === 0){
                    let {id, login, email} = response.data.data;
              this.props.setAuthUserData(id, login, email);
                }
            })
    }

    render(){return <>
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


export default connect(mapStateToProps, {setAuthUserData, fetchingToggle})(HeaderContainer);