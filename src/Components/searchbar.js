import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../Styles/searchbar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        // Replace 'your-api-endpoint' with the actual endpoint you want to fetch data from
        const response = await axios.get(`https://api.unsplash.com/photos/?client_id=A9fkduaGnNn3aJD6YeYDq_qQLEEG7OyUAYc1lzlSmgw`);
        const results = response.data.filter(
          (item) =>
            item.user?.username.toLowerCase().includes(searchTerm.toLowerCase()) // Use optional chaining
        );
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Implement debouncing to avoid making too many requests while typing
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        fetchSearchResults();
      } else {
        setSearchResults([]);
      }
    }, 300); // Adjust the debounce time as needed

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleItemClick = (id) => {
    console.log('Clicked on item with id:', id);
    // You can use the 'id' as needed, for example, make another API call, navigate to a new page, etc.
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        <div className="popup">
          {searchResults.map((item) => (
            
            // 
            <button className='ref-b' href='/vreg'>
            <div key={item.id} className="popup-item" onClick={() => handleItemClick(item.id)}>
              
              {item.user?.username}
              
            </div>
            </button>
            // 
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

