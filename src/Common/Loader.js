import styles from "../components/Users/Users.module.css";
import preLoader from "../Assets/Images/preLoader.gif";
import React from "react";

let Loader =(props)=>{
    return   <div className={styles.loader}>
        <img src={preLoader}></img>
    </div>
}

export default Loader;