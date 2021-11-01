import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg'
/* import './header.scss' */
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import ShoppingIcon from '../shopping-icon/shopping-icon';
import CardDropdown from '../card-dropdown/card-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, DivOptions, OptionLink } from './header.style';
import { signOutStart } from '../../redux/user/user.action';

const Header = ({currentUser, hidden, signOutStart}) =>(
  <HeaderContainer>
      <div className="logo-container">
        <LogoContainer to="/">
           <Logo className="logo"/>
        </LogoContainer>
      </div>
      <DivOptions>
        <OptionLink to="/boutique">
           BOUTIQUE
        </OptionLink>
        <OptionLink to="#">
           CONTACT
        </OptionLink>
        {currentUser ? (
           <OptionLink as="div"  onClick={signOutStart}>
              DECONNEXION
            </OptionLink>
           ) : (<OptionLink to="/auth">
              CONNEXION
           </OptionLink>)}
           <ShoppingIcon/>
      </DivOptions>
      {hidden ? null : <CardDropdown/>}
  </HeaderContainer>
);

//on stock currentUser recupérer depuis le state dans la clé user et ShoppinIcon dans hidden
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden : selectCartHidden
});

const mapDispatchToProps = dispatch =>({
   signOutStart: ()=>dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);