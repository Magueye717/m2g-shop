import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-up.scss'


class SignUp extends React.Component{
    constructor(){
        super()

        this.state ={
            displayName:'',
            email: '',
            password:'',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword ){
            alert('le mot de passe ne correspond pas');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email: '',
                password:'',
                confirmPassword: ''
            })
        }catch(error){
            alert(error.message);
        }
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2>J'ai pas de compte</h2>
                <span className="title">S'enregistrer avec email et mot de pass</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Nom complet" name="displayName" type="text" value={displayName} handleChange={this.handleChange}/>
                    <FormInput label="Email" name="email" type="email" value={email} handleChange={this.handleChange}/>
                    <FormInput label="Mot de passe" name="password" type="password" value={password} handleChange={this.handleChange}/>
                    <FormInput label="Confirme mot de pass" name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange}/>
                    <CustomButton type="submit">S'ENREGISTRER</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;