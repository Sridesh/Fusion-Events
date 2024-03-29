import { useEffect, useState } from "react";
import '../Styles/List.css'
import '../Styles/show.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Show = () => {
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

  return (
    <div className="mainvenue">
      <div className="list">
        {currentImages.map((image, index) => (
          <Link to={`/inside/${image.id}`}>
          <div className="wrapper" key={index}>
            <img src={image.urls.regular} alt="" />
            <figcaption>{image.alt_description}</figcaption>
          </div>
          </Link>
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
  );
}

export default Show;