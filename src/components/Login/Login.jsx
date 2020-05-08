import React from 'react';
// берем компонент поля (Field) и провайдер для формы (reduxForm)
import {Field, reduxForm} from 'redux-form';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><h3>Login</h3></div>
            <div>
                <Field placeholder="Login" component="input" name="login"/>
            </div>
            <div>
                <Field placeholder="Password" component="input" name="password"/>
            </div>
            <div>
                <Field component="input" type="checkbox" name={'rememberMe'}/> Запомнить меня
            </div>
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    )
};
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

class Login extends React.Component {
    render() {
        const onSubmit = (data) => this.props.loginThunk(data); //console.log(values);
        return <ReduxLoginForm onSubmit={onSubmit}/>;
    }
};

export default Login;