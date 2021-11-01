import { createSelector } from "reselect";

//selectionner le cart dans le state(au  niveau du root-reducer)
 const selectCart = state => state.cart;

//selectionner cartItem définit dans le reducer cart
export const selectCartItems = createSelector(
    //paramètre d'entrer
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatorQuantity, cartItem)=> 
            accumulatorQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatorQuantity, cartItem)=> 
            accumulatorQuantity + cartItem.quantity * cartItem.price,
            0
        )
);