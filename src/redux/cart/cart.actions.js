import cartActionTypes from './cart.type';


export const toggleHiddenCardAction = () =>({
    type : cartActionTypes.TOGGLE_SHOPIPING_CARD
});

export const addItem = item =>({
    type : cartActionTypes.ADD_ITEM,
    payload:item
});

export const removeItemFromCart = item =>({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload:item
});

export const decreaseItemQuantity = item =>({
    type: cartActionTypes.DECREMENTE_ITEM_QUANTITY,
    payload: item
})