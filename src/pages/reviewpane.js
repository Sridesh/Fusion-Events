import Navbarc from "../Components/Navbar";
import '../Styles/reviewpane.css'
import  img from '../images/search.png'
import { useEffect, useState } from "react";
import '../Styles/cardz.css'
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Reviewpane = () => {

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
        <div className="rpane">
            <div className="topr">
                <div className="search-div ">
                    <input
                        type="text"
                        className="w-full placeholder-gray-400 text-gray-900 p-4"
                        placeholder="Search"
                    />
                    <button>
                        <img className="searchimage"src={img} alt="" />
                    </button>
                </div>
                {currentImages.map((image, index) => (
                <div className="review row" key={index}>
                    <div className="dpr">
                        <img src={image.urls.regular} alt="" className="dpimg" />
                    </div>
                    <div className="desr">
                        <h5>{image.user.name}</h5>
                        {image.alt_description}
                    </div>
                    <div className="reply">
                        <button><b>Reply</b></button>
                    </div>
                    <hr />
                </div>
                ))}
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
        </div>
    );
}
 
export default Reviewpane;