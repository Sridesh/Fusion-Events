import { useParams } from "react-router";
import './Styles/inside.css';
import { Carousel } from "react-bootstrap";
import  Axios from "axios";
import { useState,useEffect } from "react";
import DropdownBtn from "./Components/Dropdown";

const Inside = () => {
    const {index} =useParams(); 
    const name = 'The Barn House'
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [currentImages, setCurrentImages] = useState([]);
    const[itemId, setItemId] = useState(null);

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

  const handleItemSelected = (selectedId) => {
    setItemId(selectedId);
    // Do something with the selected ID, such as updating state
  };

    return (
        <div className="inside">
            <div className="headd">
                <div className="greet">
                    Welcome to {name}
                </div>
            </div>
            <div className="imagebooth">
                <Carousel className='cara'>

                    {images.map((image, index) => (
                        <Carousel.Item interval={5000} className='litm'>
                        <img src={image.urls.regular} className='bizimg'/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="vendor-details">
                <DropdownBtn onItemSelected={handleItemSelected} />
                <div className="pkgpane">
                    {itemId}
                </div>
            </div>

        </div>
    );
}
 
export default Inside;