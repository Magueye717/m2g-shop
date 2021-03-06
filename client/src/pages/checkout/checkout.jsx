import React from 'react';
import './checkout.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = ({cartItems, total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
        <div className="header-block">
                <span>Produit</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantité</span>
            </div>
            <div className="header-block">
                <span>Prix</span>
            </div>
            <div className="header-block">
                <span>Supprimer</span>
            </div>
        </div>
        {cartItems.map(cartItem =>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <div className="total">TOTAL: ${total} </div>
        <div className="test-warning">
            * Veuillez entrer ces crédentials pour le teste *
            <br />
            4242 4242 4242 4242  - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton  price={total}/>

    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:  selectCartTotal
})

export default connect(mapStateToProps) (CheckoutPage);