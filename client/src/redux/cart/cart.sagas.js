import {call, all, takeLatest, put} from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import userActionTypes from '../user/user.types';

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function * onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga(){
    yield all([call(onSignOutSuccess)])
}