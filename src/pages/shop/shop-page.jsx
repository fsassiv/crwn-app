import React from "react";
import { Route } from "react-router-dom";
import ColelctionsOverview from "../../components/collections-overview/colelctions-overview";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ColelctionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
