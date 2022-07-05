import React from "react";

const CatCard = (cat) => {
  return (
    <div
      key={cat.id}
      className="cat-card relative w-full h-48 bg-red-400 rounded-lg  flex flex-col justify-center items-center"
    >
      <img
        className="object-center object-cover  h-full w-full"
        src={cat.url}
        alt="cat"
      />
      <div onClick={() => addToFavorites(cat)} className="favorite" />
    </div>
  );
};
export default CatCard;
