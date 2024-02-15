import '../Styles/vendorhome.css';
import { useState, useEffect } from 'react';
import useFetch from '../Components/usefetch';
import Axios from 'axios';
import ReactPaginate from "react-paginate";

const Vendorhome = () => {
  const { datas } = useFetch('https://random-data-api.com/api/v2/users');
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0); // Adjusted initial page to 0

  const [currentImages, setCurrentImages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const imagesPerPage = 3;
  

 

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

   if (!datas) {
    return <p>Loading...</p>; // or any loading state you prefer
  }

  return (
    <div className="vendor">
      <div className="vpanel1">
        <div className="left-div">
          <div className="img-div">
            <img src={datas.avatar} alt="" />
          </div>
          <div className="data-div">
            <div className='inner-cont'>{datas.date_of_birth}</div>
            <div className='inner-cont'>{datas.address && datas.address.state}</div>
            <div className='inner-cont'>{datas.email}</div>
            <div className='inner-cont'>{datas.phone_number}</div>
          </div>
        </div>
        <div className="right-div">
          <h3 className="vname">{datas.first_name + " " + datas.last_name}</h3>
          <h4 className="vuname">{datas.employment.title}</h4>
          <p className="vdis"></p>
        </div>
      </div>

      <div className="vpanel2 ">
        <div className="ms-head"><h3>My Services</h3></div>
        <div className="conten">
            {currentImages.map((image, index) => (
        <div className="litbox">
            <img src={image.urls.regular}  />
            Hello
        </div>
        ))}
        
      </div>
      </div>

      <div className="vpanel2 ">
        <div className="ms-head"><h3>Portfolios</h3></div>
        <div className="conten">
            {currentImages.map((image, index) => (
        <div className="litbox2">
            <img src={image.urls.regular}  />
        </div>
        ))}
        
      </div>
      </div>
      
    </div>
  );
}

export default Vendorhome;
