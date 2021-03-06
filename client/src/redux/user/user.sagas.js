import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.utils';
import {
    signInFailure,
    signInSuccess,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
} from './user.action';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id:userSnapShot.id, ...userSnapShot.data()}));
    } catch (error) {
       yield put(signInFailure(error))
    }
}

export function* signUp({payload:{email, password, displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{displayName}}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload:{user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
        
    }
}

export function* isUserAuthenticated(){
    try {
        const authUser = yield getCurrentUser();
        if(!authUser)return;
        yield getSnapshotFromUserAuth(authUser);
    } catch (error) {
        put(signInFailure(error))
    }
}

export function* signInWithGoogle (){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
       yield put(signInFailure(error))
    }
}


export function* signInWithEmail({payload:{email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error));
    }
}



export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut(){
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSaga(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOut),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}