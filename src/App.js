import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {appIsInitialisedTC} from "./components/Redux/AppReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Loader from "./Common/Loader";


class App extends Component {

    componentDidMount() {
        this.props.appIsInitialisedTC();
    };

    render() {
        if(this.props.initialised === false){
            return  <Loader/>}

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>

                    <div className='app-wrapper-content'>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/Login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

const mapStateToProps = (state) => {
    return {
        initialised: state.appPage.initialised
    }
};

export default compose(withRouter, connect(mapStateToProps, {appIsInitialisedTC}))(App);