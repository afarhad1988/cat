import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store);

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  };

  return (
    <div className="container">
      <div className="card-item grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {favorites.length ? (
          favorites.map((cat) => (
            <div
              key={cat.id}
              className="cat-card relative w-full h-48 bg-red-400 rounded-lg  flex flex-col justify-center items-center"
            >
              <img
                className="object-center object-cover  h-full w-full"
                src={cat.url}
                alt="cat"
              />
              <div
                onClick={() => removeFromFavorites(cat.id)}
                className="favorite-full"
              />
            </div>
          ))
        ) : (
          <b>Добавьте кота</b>
        )}
      </div>
    </div>
  );
};
export default Favorites;
