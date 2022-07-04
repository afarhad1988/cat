import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState([]);
  const [loader, setLoader] = useState(true);

  const addToFavorites = (cat) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: cat });
  };

  useEffect(() => {
    axios(
      "https://api.thecatapi.com/v1/images/search?limit=15&page=10&order=Desc"
    ).then((res) => {
      setCats(res.data);
      setLoader(false);
    });
  }, []);

  if (loader) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="cat-card relative w-full h-48 bg-red-400 rounded-lg  flex flex-col justify-center items-center"
          >
            <img
              className="object-center object-cover  h-full w-full"
              src={cat.url}
              alt="cat"
            />
            <div onClick={addToFavorites} className="favorite" />
          </div>
        ))}
        <button className="m-auto">...загрузить еще котиков...</button>
      </div>
    </div>
  );
};
export default Homepage;
