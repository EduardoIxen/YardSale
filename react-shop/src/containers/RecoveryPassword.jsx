import React from 'react' //imr
import '../styles/RecoveryPassword.scss'
import logo from '../../public/logos/logo_yard_sale.svg'
import imgEmail from '../../public/icons/email.svg'


const RecoveryPassword = () => { //slr
    return (
        <div className="login">
        <div className="form-container">
            <img src={logo} alt="Logo de yard sale"
            className="logo"/>

            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

            <div className="email-image">
                <img src={imgEmail} alt="Ícono representado el correo electrónico."/>
            </div>

            <button className="primary-button login-button">
                Login
            </button>

            <p className="resend">
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
            </p>
        </div>
    </div>
    );
}

export default RecoveryPassword;
