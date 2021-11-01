import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import boutiqueReducer from "./boutique/boutique.reducer";
import mainMenuReducer from './main-menu/main-menu.reducer';


const persistConfig ={
    key:'root',
    storage,
    whiteist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart : cartReducer,
    mainmenu: mainMenuReducer,
    boutique: boutiqueReducer
})

export default persistReducer(persistConfig ,rootReducer);