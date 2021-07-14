import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './card-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleHiddenCardAction } from '../../redux/cart/cart.actions';


const CardDropdown = ({cartItems, history, dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?  
            (cartItems.map(item=>(
            <CartItem key={item.id}  item={item}/>
            ))): 
            (<span className="empty-message">Aucun article dans votre panier</span>)}
        </div>
            <CustomButton onClick={()=>{
                history.push('/solde'); 
                dispatch(toggleHiddenCardAction())
                }}>VOIR PANIER
            </CustomButton>
    </div>
);

// vas sur le state et recupere le la variable cart sur le root-reducer et destructure le en cartItems
/* const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems 
}); */

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});


export default withRouter(connect(mapStateToProps) (CardDropdown));