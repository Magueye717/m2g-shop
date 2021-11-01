import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import './sign-in.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

const SignIn = ({emailSignInStart, googleSignInStart})=> {
    const [userCredentials, setUserCredentials]=useState({
        email: '',
        password: ''})

    const { email, password } = userCredentials;
    
    const handleSubmit = async event=> {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const {value, name} = e.target ;
        setUserCredentials({...userCredentials,[name]:value})
    }
    
        return(
            <div className="sign-in" onSubmit={handleSubmit}>
                <h2>J'ai déja un compte</h2>
                <span>S'identifer avec email et mot de pass</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type="email" label="email" value={email} handleChange={handleChange} required/>
                    <FormInput name='password' type="password" label="password" value={password} handleChange={handleChange} required />
                    <div className="buttons">
                    <CustomButton type='submit'>CONNEXION</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>CONNEXION AVEC GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
}

const mapDispatchtoProps = dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email, password)=>dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchtoProps) (SignIn);