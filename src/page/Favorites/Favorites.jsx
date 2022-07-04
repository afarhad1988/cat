import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((store) => store);
  return <div className="container">Favorites {JSON.stringify(favorites)}</div>;
};
export default Favorites;
