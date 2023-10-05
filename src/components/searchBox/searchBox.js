import React, { useState } from 'react';
import './index.css';

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchText);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Busca en este sitio web"
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
