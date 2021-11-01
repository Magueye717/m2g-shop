import React from 'react';
import './shopping-icon.scss';
import { connect } from 'react-redux';
import { toggleHiddenCardAction } from '../../redux/cart/cart.actions';
import {ReactComponent as ShopIcon} from '../../assets/11.2 shopping-bag.svg'
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';




const ShoppingIcon = ({toggleHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleHidden}>
        <ShopIcon className="shopping-icon" />
        <span className="item-count"> {itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleHidden : ()=>dispatch (toggleHiddenCardAction())
});

/* const mapStateToProps = ({cart:{cartItems}})=>({
   itemCount : cartItems.reduce((accumulatorQuantity, cartItem)=> accumulatorQuantity + cartItem.quantity,0)
}) */

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemCount
 })
export default connect(mapStateToProps, mapDispatchToProps) (ShoppingIcon);