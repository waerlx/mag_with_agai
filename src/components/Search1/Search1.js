import React from 'react';

const SearchBar = () => {
  const handleSearch = (e) => {
    // Ваша логика для обработки поиска
    console.log('Searching for:', e.target.value);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={handleSearch} // Обработчик изменения текста ввода
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
