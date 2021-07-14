import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

     handleSubmit = async event=> {
        event.preventDefault();

        const { email, password } = this.state;
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error.message);
        }
    }

    handleChange = e => {
        const {value, name} = e.target ;
        this.setState({[name]:value})
    }
    

    render(){
        return(
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>J'ai déja un compte</h2>
                <span>S'identifer avec email et mot de pass</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' type="password" label="password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                    <CustomButton type='submit'>CONNEXION</CustomButton>
                    <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn>CONNEXION AVEC GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;