import React, { useState, useEffect } from "react";
import Card from "./Card"; // Ensure you import your Card component
import Button from "./Button"; // Ensure you import your Button component
import Search from "./Search"; // Ensure you import your Search component
import productData from "../data/full-products"; // Assuming this is where your data is coming from

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState("");
  
  // Function to filter products by tags
  const filterTags = (searchTerm) => {
    return data.filter(product =>
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setOffset(0); // Reset to the first page when search changes
  };

  // Handle previous and next pagination
  const handlePagination = (direction) => {
    setOffset(prevOffset => {
      let newOffset = prevOffset + direction * limit;
      // Ensure offset is within bounds
      newOffset = Math.max(0, Math.min(newOffset, filteredData.length - limit));
      return newOffset;
    });
  };

  // Filtered data based on the search term
  const filteredData = searchTerm ? filterTags(searchTerm) : data;

  // Set products based on offset and filtered data
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">
      <Search handleSearch={handleSearch} /> {/* Search component */}
      
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePagination(-1)} />
        <Button text="Next" handleClick={() => handlePagination(1)} />
      </div>
    </div>
  );
};

export default CardList;
