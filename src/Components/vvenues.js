import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import '../Styles/List.css';
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Vvenues = () => {
  const navigate = useNavigate();
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImageClick = (imageId) => {
    setSelectedImageId(imageId);
    navigate(`/vvendors/${imageId}`);
    // navigate('/vvendors')
  };

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0); // Adjusted initial page to 0

  const [currentImages, setCurrentImages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const imagesPerPage = 8;

  useEffect(() => {
    setIsLoading(true);
    Axios.get('https://api.unsplash.com/photos/?client_id=A9fkduaGnNn3aJD6YeYDq_qQLEEG7OyUAYc1lzlSmgw')
      .then((res) => {
        setImages(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const startIndex = page * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    setCurrentImages(images.slice(startIndex, endIndex));
    setPageCount(Math.ceil(images.length / imagesPerPage));
  }, [images, page]);

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected);
  };

  // Rest of your component code...

  return (
    // <div>
    //   {/* Render your images, and pass the image ID to handleImageClick */}
    //   {currentImages.map((image, index) => (
    //     <div key={index} onClick={() => handleImageClick(image.id)}>
    //       {/* Render your image */}
    //     </div>
    //   ))}
    // </div>
    <div className="main">
        <div className="view"><a href="" style={{ marginRight:'100px'}}>View All</a></div>
      <div className="list">
        {currentImages.map((image, index) => (
        //   <Link to={`/inside/${image.id}`}>
          <div className="wrapper" key={index}>
            <img src={image.urls.regular} alt="" className="img" onClick={() => handleImageClick(image.id)} />
            <figcaption>{image.alt_description}</figcaption>
          </div>
        //   </Link>
        ))}
      </div>
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
    // <h1>Hello</h1>
  );
};

export default Vvenues;