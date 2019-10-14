import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./preview-collection.scss";

import CollectionItem from "../collection-item/collection-item";

const PreviewCollection = ({ title, items, match }) => {
  return (
    <div className="collection-preview">
      <Link to={`${match.path}/${title.toLowerCase()}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
            // <div key={item.id}>item.name</div>
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
