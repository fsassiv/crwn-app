import { createSelector } from "reselect";

const selectShop = state => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectoinUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectoinUrlParam] : null)
    // collections =>
    //   collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectoinUrlParam]
    //   )
  );
