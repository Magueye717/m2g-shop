import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import ShoppingIcon from '../shopping-icon/shopping-icon';
import CardDropdown from '../card-dropdown/card-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) =>(
  <div className='header'>
      <div className="logo-container">
        <Link to="/">
         <Logo className="logo"/>
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/boutique">
           BOUTIQUE
        </Link>
        <Link className="option" to="#">
           CONTACT
        </Link>
        {currentUser ? (
           <div className="option" onClick={()=>auth.signOut()}>
              DECONNEXION
            </div>
           ) : (<Link className="option" to="/auth">
              CONNEXION
           </Link>)}
           <ShoppingIcon/>
      </div>
      {hidden ? null : <CardDropdown/>}
  </div>
);

//on stock currentUser recupérer depuis le state dans la clé user et ShoppinIcon dans hidden
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);