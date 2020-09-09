import React, { useState } from "react";

import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    props.refreshFunction(e.target.value);
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        onChange={searchHandler}
        style={{ width: 200 }}
        value={SearchTerm}
      ></Search>
    </div>
  );
}

export default SearchFeature;
