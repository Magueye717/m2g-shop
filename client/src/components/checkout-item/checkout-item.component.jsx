import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, addItem, decreaseItemQuantity } from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, removeItem, increaseQuantity, decreaseQuantity})=> {
  const {imageUrl, price, name, quantity}=cartItem;
  return(
    <div className="checkout-item">
        <div className="image-container">
              <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>increaseQuantity(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>removeItem(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  removeItem : item => dispatch(removeItemFromCart(item)),
  increaseQuantity : item => dispatch(addItem(item)),
  decreaseQuantity : item => dispatch(decreaseItemQuantity(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);