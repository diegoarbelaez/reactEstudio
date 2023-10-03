import React from 'react'
import "../styles/TodoSearch.css";

function TodoSearch({searchValue,setSearchValue}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={({target}) => {
        setSearchValue(target.value)
      }}
    />
  );
}

export { TodoSearch };
