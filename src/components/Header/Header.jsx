import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <header className="flex justify start py-5 mb-6">
        <div className="container">
          <Link
            to="/"
            onClick={() => handleClick(0)}
            className={`${
              activeIndex === 0 ? "active" : ""
            } ${"text-white py-5 px-5"}`}
          >
            Все котики
          </Link>
          <Link
            to="/favorite"
            onClick={() => handleClick(1)}
            className={`${
              activeIndex === 1 ? "active" : ""
            } ${"text-white py-5 px-5"}`}
          >
            Любимые котики
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Header;
