import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/sign-up';
import './auth.scss'


const AuthPage = ()=>(
<div className="auth">
    <SignIn/>
    <SignUp/>
</div>
);
export default AuthPage;