import {takeLatest, call, put, all} from 'redux-saga/effects';
import boutiqueActionType from './types.boutique';
import { firestore, convertedtCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFail } from './actions.boutuique';


export function* fetchCollectionAsync(){
   try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertedtCollectionSnapshotToMap, snapShot)
        yield put(fetchCollectionSuccess(collectionsMap));

   } catch (error) {
       yield put(fetchCollectionFail(error.message))
   }
}

export function* fetchCollectionsStart(){
 yield takeLatest(boutiqueActionType.FETCH_COLLECTION_START, fetchCollectionAsync)
}

export function* BoutiqueSaga(){
    yield all([call(fetchCollectionsStart)])
}