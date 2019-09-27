import ShopActionTypes from "./shot.types";

export const updateCollections = collectionMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
});
