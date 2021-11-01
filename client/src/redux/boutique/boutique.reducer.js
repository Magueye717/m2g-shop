import SHOP_DATA from './data';
import boutiqueActionType from './types.boutique';
const INITIAL_STATE = {
    collections: SHOP_DATA,
    isFetching:false,
    errorMessage:undefined
}

const boutiqueReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case boutiqueActionType.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetching:true
            }
        case boutiqueActionType.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case boutiqueActionType.FETCH_COLLECTION_FAILLURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
};
export default boutiqueReducer;