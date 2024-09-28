import React, { useState } from 'react';
import './App.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Enter</button>
      <button type="button" onClick={() => setCity('')}>Clear</button>
    </form>
  );
};

export default SearchBar;
