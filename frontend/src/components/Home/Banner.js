import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [displaySearchBox, setDisplaySearchBox] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={() => setDisplaySearchBox(true)}>
            A place to get
          </span>
          {displaySearchBox && (
            <input
              id="search-box"
              className="p-2 mx-2 w-50 rounded"
              name="search"
              type="text"
              onChange={props.onSearchValueChange}
              value={props.searchValue}
              placeholder="What is it that you truly desire?"
            />
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
