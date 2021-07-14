import './App.css';
import Accueil from './pages/accueil/Accueil';
import {Redirect, Route, Switch} from 'react-router-dom';
import Boutique from './pages/boutique/boutique';
import Header from './components/header/header';
import AuthPage from './pages/autentification/AuthPage';
import React from 'react';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout';


class App extends React.Component{
  /*  constructor(){
     super();
     this.state ={
       currentUser :null
     }
     
   } */
   
 unsubscribeFromAuth = null;
     componentDidMount(){
      const {setCurrentUser} = this.props
       this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
         if(authUser){
          const userRef = await createUserProfileDocument(authUser);
          userRef.onSnapshot(snapshot =>{
            setCurrentUser({
             id:snapshot.id,
             ...snapshot.data()
           })
          })
         }
         setCurrentUser(authUser)
       });
     }
    
     componentWillUnmount(){
       this.unsubscribeFromAuth();
     }
  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
           <Route exact path='/' component={Accueil}/>
           <Route  path='/boutique' component={Boutique}/>
           <Route exact path='/solde' component={CheckoutPage}/>
           <Route exact path='/auth' render={()=> this.props.currentUser ? (<Redirect to='/' />):(<AuthPage />)}/>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
   setCurrentUser : user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
