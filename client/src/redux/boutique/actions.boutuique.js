import { convertedtCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import boutiqueActionType from "./types.boutique";

export const initCollectionsData = collectionMap =>({
    type: boutiqueActionType.GET_COLLECTION_DATA,
    payload: collectionMap
});

export const fetchCollectionsStart = ()=>({
    type:boutiqueActionType.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionMaps =>({
    type:boutiqueActionType.FETCH_COLLECTION_SUCCESS,
    payload:collectionMaps
});

export const fetchCollectionFail = errorMessage =>({
    type:boutiqueActionType.FETCH_COLLECTION_FAILLURE,
    payload:errorMessage
});

/* export const fetchCollectionStratAsync = ()=>{
    return dispatch => {
        const collectionRef = firestore.collection('collections'); 
        dispatch(fetchCollectionsStart());   
        collectionRef.get().then(snapshot=>{
            const collectionMap =  convertedtCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
          }).catch(err => dispatch(fetchCollectionFail(err.message)));
    }
} */