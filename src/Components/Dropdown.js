import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Axios from 'axios';

function DropdownBtn({ onItemSelected, title }) {
  const [images, setImages] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    Axios.get('https://api.unsplash.com/photos/?client_id=A9fkduaGnNn3aJD6YeYDq_qQLEEG7OyUAYc1lzlSmgw')
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleItemClick = (event) => {
    const selectedId = event.target.id;
    setSelectedItemId(selectedId);

    // Call the callback function with the selected ID
    if (onItemSelected) {
      onItemSelected(selectedId);
    }
  };

  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
      {images.map((image, index) => (
        <Dropdown.Item key={index} onClick={handleItemClick} id={index}>
          {image.user.username}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default DropdownBtn;
