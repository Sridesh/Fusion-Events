import { Button } from 'react-bootstrap';
import './Styles/Home.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image from './images/bg.jpg';
import List from './List';
import Cardz from './Cardz';

const Home = () => {
    return (
        <div className="home">
            <div className="greeting">
                <div className="content">
                    <h1 className='slogan'>Your Special Occassion, Your Way</h1>
                    <p>"With a fresh unique approach & a full service to celebrate all your special occassion"</p>
                </div>
            </div>
            <div className='event'>
                <h2 className="start">Create Your Event</h2>
                <Button>Get Started</Button>
            </div>
            <h3 style={{marginLeft:"10%"}}>Browse By Category</h3>
            <List/>
            <h3 style={{marginLeft:"10%"}}>Popular Venues</h3>
            <List/>

            
            <div className="reviews" style={{marginBottom:"50px"}}>
                <Carousel className='car'>
                    <Carousel.Item interval={5000} className='itm'>
                        <img src={image} className='carimg'/>
                        <Carousel.Caption>
                        <h3>Isuru Gajasinghe</h3>
                        <p>"After making these adjustments, you should have better control over the alignment of your logo and text within the Navbar. If the issue persists, inspect the elements in your browser's developer tools to identify any unexpected styling or layout properties."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img src={image} className='carimg'/>
                        <Carousel.Caption>
                        <h3>Manula Rathnayake</h3>
                        <p>"It's possible that some default styles or margins from Bootstrap or your own styles are affecting the alignment. Consider adjusting the margin or padding for the logo or the .brand class."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className='itm'>
                        <img src={image} className='carimg' />
                        <Carousel.Caption>
                        <h3>Senadi Medis</h3>
                        <p>
                            "It's possible that some default styles or margins from Bootstrap or your own styles are affecting the alignment. Consider adjusting the margin or padding for the logo or the .brand class."
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h3 style={{marginLeft:"10%"}}>Featured</h3>
            <Cardz/>
        </div>
    );
}
 
export default Home;