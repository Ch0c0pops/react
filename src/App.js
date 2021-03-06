import React, {Component, Suspense, lazy} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {appIsInitialisedTC} from "./components/Redux/AppReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Loader from "./Common/Loader";
import store from "./components/Redux/Redux-Store";
const DialogsContainer = lazy(()=> import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(()=> import('./components/Profile/ProfileContainer'))

class App extends Component {

    componentDidMount() {
        this.props.appIsInitialisedTC();
    };

    render() {
        if(this.props.initialised === false){
            return  <Loader/>}

        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>

                    <div className='app-wrapper-content'>
                        <Suspense fallback={<div><Loader/></div>}>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        </Suspense>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/Login' render={() => <Login/>}/>
                    </div>
                </div>
           )
    }
}

const mapStateToProps = (state) => {
    return {
        initialised: state.appPage.initialised
    }
};
const AppContainer = compose(withRouter, connect(mapStateToProps, {appIsInitialisedTC}))(App);
const SamuraiJSApp =(props)=>{
    return (<HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
    )
};

export default SamuraiJSApp;