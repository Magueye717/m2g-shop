import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import {connect} from 'react-redux'
import './sign-up.scss'
import { signUpStart } from '../../redux/user/user.action';


const SignUp =({signUpStart})=>{
   const [userCredentials, setUserCredentials]=useState({
    displayName:'',
    email: '',
    password:'',
    confirmPassword: ''
});

   const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]:value})
    }

   const {displayName, email, password, confirmPassword} = userCredentials;

   const handleSubmit = async event =>{
        event.preventDefault();
        /* const {displayName, email, password, confirmPassword} = userCredentials; */

        if(password !== confirmPassword ){
            alert('le mot de passe ne correspond pas');
            return;
        } 

        signUpStart({displayName, email, password})
    }
   
        return(
            <div className="sign-up">
                <h2>J'ai pas de compte</h2>
                <span className="title">S'enregistrer avec email et mot de pass</span>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Nom complet" name="displayName" type="text" value={displayName} handleChange={handleChange}/>
                    <FormInput label="Email" name="email" type="email" value={email} handleChange={handleChange}/>
                    <FormInput label="Mot de passe" name="password" type="password" value={password} handleChange={handleChange}/>
                    <FormInput label="Confirme mot de pass" name="confirmPassword" type="password" value={confirmPassword} handleChange={handleChange}/>
                    <CustomButton type="submit">S'ENREGISTRER</CustomButton>
                </form>
            </div>
        )
    }

const mapDispatchToprops = dispatch =>({
    signUpStart:userCredentails=>dispatch(signUpStart(userCredentails))
})

export default connect(null, mapDispatchToprops)(SignUp);