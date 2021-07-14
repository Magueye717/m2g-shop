import cartActionTypes from "./cart.type";
import { addItemTocart, decrementItemQuantity } from '../cart.utilites';

const INITIAL_STATE = {
    hidden:true,
    cartItems : []
}


const cartReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_SHOPIPING_CARD:
             return {
                 ...state,
                 hidden: !state.hidden
             };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemTocart(state.cartItems, action.payload)
                /* cartItems: [...state.cartItems, action.payload] */
            };
        
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        case cartActionTypes.DECREMENTE_ITEM_QUANTITY:
            return{
                ...state,
                cartItems: decrementItemQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;