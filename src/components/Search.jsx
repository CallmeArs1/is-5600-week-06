import React from 'react';

const Search = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="pa3">
      <input
        type="text"
        placeholder="Search by tags..."
        className="pa2 ba bw1"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
