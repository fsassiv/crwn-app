import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

// import CollectionsOverview from "../../components/collections-overview/colelctions-overview";
// import CollectionPage from "../collection/collection";
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        /> */}
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
