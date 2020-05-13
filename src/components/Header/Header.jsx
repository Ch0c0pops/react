import React from 'react';
import classes from'./../Header/Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return  <header className={classes.header}>
        <img src = 'https://img2.freepng.ru/20180716/ucr/kisspng-silverstripe-content-management-system-open-source-dark-biography-5b4d60d933bb42.1958973915317977212119.jpg'/>
        <div className={classes.login}>
            {props.isAuth ? <div>{props.login} - <div className={classes.login} onClick={props.logoutThunk}>Logout</div></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header; 