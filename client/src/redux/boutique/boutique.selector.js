import { createSelector } from 'reselect';

const selectBoutique = state => state.boutique;

export const selectBoutiqueCollections = createSelector(
     [selectBoutique],
     boutique => boutique.collections
);

export const selectCollectionsForPreview = createSelector(
     [selectBoutiqueCollections],
     collections => Object.keys(collections).map(key => collections[key])
   );

/* export const selectCollections = collectionUrlParam => createSelector(
     [selectBoutiqueCollections],
     collections => collections.find(collection => collection.id ===COLLECTION_ID_MAP[collectionUrlParam] )
) */

export const selectCollections = collectionUrlParam =>
createSelector(
     [selectBoutiqueCollections],
     collections => collections[collectionUrlParam]
);

export const selectIsCollectionFetching = createSelector(
  [selectBoutique],
   boutique => boutique.isFetching
);