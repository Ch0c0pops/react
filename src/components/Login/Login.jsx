import React from 'react';
// берем компонент поля (Field) и провайдер для формы (reduxForm)
import {Field, reduxForm} from 'redux-form';
import {Input} from "../../Common/FormControls";
import {maxLengthCreator, required} from "../../Utilits/Validators";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'

const maxLength30 = maxLengthCreator(30);

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><h3>Login</h3></div>
            <div>
                <Field placeholder="Email" component={Input} name="email" validate={[maxLength30, required]}/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} name="password" type='password'
                       validate={[maxLength30, required]}/>
            </div>
            <div>
                <Field component="input" type="checkbox" name={'rememberMe'}/> Запомнить меня
            </div>
            {props.captcha && <img className={styles.captcha} src={props.captcha}/> }
            {props.captcha &&
                <div>
                    <Field component={Input}  placeholder="captcha" name='captcha' validate={[required]}/>
                </div>
                }
            <div>{props.error? <div className={styles.authError}>{props.error}</div>: null}</div>
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    )
};
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login =(props)=> {
        if (props.isAuth) {
            return <Redirect to={'/Profile'}/>
        };

        const onSubmit = (data) => props.loginThunk(data.email, data.password, data.rememberMe, data.captcha); //console.log(values);
        return <ReduxLoginForm onSubmit={onSubmit} captcha={props.captcha}/>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
};

export default connect(mapStateToProps, {loginThunk})(Login);