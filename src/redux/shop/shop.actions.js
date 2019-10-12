import ShopActionTypes from "./shop.types";
import // firestore,
// convertCollectionsSnapshotToMap
"../../firebase/firebase.util";

// export const updateCollections = collectionMap => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionMap
// });

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  // return dispatch => {
  //   const collectionRef = firestore.collection("collections");
  //   dispatch(fetchCollectionsStart());
  //   collectionRef
  //     .get()
  //     .then(async snapshot => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionsSuccess(collectionsMap));
  //     })
  //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  // };
};
