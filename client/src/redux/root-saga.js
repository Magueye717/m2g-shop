import {call, all} from 'redux-saga/effects';
import { BoutiqueSaga } from './boutique/boutique.sagas';
import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';


export default function* rootSaga(){
    yield all([
        call(BoutiqueSaga),
        call(userSaga),
        call(cartSaga)
    ]);
}