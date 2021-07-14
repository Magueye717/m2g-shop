 export const addItemTocart = (cartItems, itemTodAdd)=>{
     //vérifier si l'élément qu'on evut ajouter existe
     const estExistant = cartItems.find(cartItem => cartItem.id === itemTodAdd.id);
    
     //si oui
     if(estExistant){
        return  cartItems.map(cartItem => 
            cartItem.id === itemTodAdd.id 
            ? {...cartItem, quantity : cartItem.quantity  + 1}
            : cartItem
        );
          
     }
     //si non
     return [...cartItems, {...itemTodAdd, quantity : 1}];
 }

 export const decrementItemQuantity = (cartItems, itemToDecrease)=>{
     const estExistant = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);

     if(estExistant.quantity === 1){
         return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id);
     }

     return cartItems.map(cartItem => cartItem.id ===itemToDecrease.id ?
        {...cartItem, quantity: cartItem.quantity -1} : cartItem);
 }