import './App.css';
import Accueil from './pages/accueil/Accueil';
import {Redirect, Route, Switch} from 'react-router-dom';
import Boutique from './pages/boutique/boutique';
import Header from './components/header/header';
import AuthPage from './pages/autentification/AuthPage';
import React, { useEffect } from 'react';

import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.action';
import CheckoutPage from './pages/checkout/checkout';
/* import { selectCollectionsForPreview } from './redux/boutique/boutique.selector';
 */

const App =({checkUserSession, currentUser})=>{

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])
  /*  constructor(){
     super();
     this.state ={
       currentUser :null
     }
     
   } */
   
   
    
  
    return (
      <div className="container">
        <Header/>
        <Switch>
           <Route exact path='/' component={Accueil}/>
           <Route  path='/boutique' component={Boutique}/>
           <Route exact path='/solde' component={CheckoutPage}/>
           <Route exact path='/auth' render={()=> currentUser ? (<Redirect to='/' />):(<AuthPage />)}/>
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 /*  collectionArray: selectCollectionsForPreview */
});

const mapDispatchToProps = dispatch=>({
  checkUserSession: ()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
