import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(0);

  const addToFavorites = (cat) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: cat });
  };

  useEffect(() => {
    axios(
      `https://api.thecatapi.com/v1/images/search?limit=15&page=${
        page + 1
      }&order=Desc`
    ).then((res) => {
      setCats(res.data);
      setLoader(false);
    });
  }, [page]);

  if (loader) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <div className="pagination">
        {Array(Math.ceil(10))
          .fill(0)
          .map((item, idx) => idx + 1)
          .map((buttonNum, idx) => (
            <button
              key={idx}
              className="pagination-btn"
              onClick={() => setPage(idx)}
            >
              {idx + 1}
            </button>
          ))}
      </div>
      <div className=" card-item grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="cat-card relative w-full h-48  bg-red-400 rounded-lg  flex flex-col justify-center items-center"
          >
            <img
              className="object-center object-cover  h-full w-full"
              src={cat.url}
              alt="cat"
            />
            <div onClick={() => addToFavorites(cat)} className="favorite" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Homepage;
