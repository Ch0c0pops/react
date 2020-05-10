import React from 'react';
import styles from './FormControls.module.css';

//рефакторинг с применением HOC самостоятельный, код как у Димыча в концe выпуска 77.

const FormWrapper = (Element) => {
    let wrappedForm =({input, meta, ...props}) =>{
        const hasError = meta.touched && meta.error;
        return(
            (<div >
                <div >
                    <Element className={hasError ? styles.error : ''} {...input} {...props} />
                </div>
                <div className={styles.forms + '' + styles.error}>
                    {hasError && <span className={hasError ? styles.textError : ''}>{meta.error}</span>}
                </div>
            </div>)
        )
    }
    return wrappedForm;
};
export const Input =  FormWrapper('input');
export const Textarea =  FormWrapper('textarea');