import React from 'react';
import styles from './FormControls.module.css';


export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (<div >
        <div >
            <textarea className={hasError ? styles.error : ''} {...input} {...props} />
        </div>
        <div className={styles.forms + '' + styles.error}>
            {hasError && <span className={hasError ? styles.textError : ''}>{meta.error}</span>}
        </div>
    </div>)
};

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (<div >
        <div >
            <input className={hasError ? styles.error : ''} {...input} {...props} />
        </div>
        <div className={styles.forms + '' + styles.error}>
            {hasError && <span className={hasError ? styles.textError : ''}>{meta.error}</span>}
        </div>
    </div>)
};