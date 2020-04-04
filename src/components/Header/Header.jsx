import React from 'react';
import classes from'./../Header/Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return  <header className={classes.header}>
        <img src = 'https://img2.freepng.ru/20180716/ucr/kisspng-silverstripe-content-management-system-open-source-dark-biography-5b4d60d933bb42.1958973915317977212119.jpg'/>
        <div className={classes.login}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Log in</NavLink>}
        </div>
    </header>
}

export default Header; 