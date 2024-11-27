import React from "react";
import { Link } from "react-router-dom";

const CategoryButton = ({ category }) => {
  return (
    <Link to={`/categoria/${category.id}`}>
      <button style={{ margin: '10px', padding: '8px 16px', backgroundColor: 'teal', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {category.name}
      </button>
    </Link>
  );
};

export default CategoryButton;
