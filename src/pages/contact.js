import { Button } from 'react-bootstrap';
import '../Styles/contact.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import logo from '../images/Logo.jpg'
import wew from '../images/wew.png'
import i1 from '../images/hs.jpg'
import i2 from '../images/1.png'
import i3 from '../images/2.png'
import i4 from '../images/3.png'
import i5 from '../images/4.png'
import Inquiries from '../Components/inquiries';


const Contact = () => {
    return (
        <div className="home">
            <div className="greeting">
                <div className="content">
                    <h1 className='slogan'>We are Fusion Events!</h1>
                    <p>"Feel free to reach out to us through our
 Fusion Events contact page "</p>
                </div>
            </div>
            <div className='fabout-cont'>
                <div className="ffrst row">
                    <div className="ffcont">
                        <h1>Get in touch with us!</h1><br></br>
                        <hr /><br></br>
                        
                        <h5>Fusion Events Contact Number</h5>
                        <p className='fp-cont'>
                            Mr Isuru - 0758042599</p>

                            <br></br>
                        <h5>Optional Contact Numbers</h5>
                        
                        <p className='fp-cont'>
                            Mr Manula - 075678987
                        </p>
                        
                        <p className='fp-cont'>
                            Mr Sridesh - 0718539307
                        </p>
                            <br></br>

                        <h5>Fusion Events Email</h5>
                        
                        <p className='fp-cont'>
                            fusionevents.official@gmail.com
                        </p>
                        <p className='fp-cont'>
                            Mr Sridesh - 0718539307
                        </p><br></br>
                        
                        <Inquiries us="us from here"/>
                        
                    </div>


                    {/* <div className="fcont">
                        <div>
                            <img src={logo} alt="" className='real'/>
                        </div>
                    </div> */}
                </div>
                <div className="fscnd row">
                    
                    <h3 style={{
                        textAlign:'center'
                    }}>"Fusion Event Management: Making Dreams a Reality"</h3>
                    <p style={{
                        color:'black',
                        fontSize:'10px',
                        textAlign:'center'
                    }}>
                    Fusion Event Management specializes in transforming your ideas into beautifully executed,    spectacular events. We offer a broad variety of planning and execution services through our devoted team of event professionals, ensuring that every aspect is meticulously personalized to perfection. Our services include event organizing, unique design, entertainment, venue selection, culinary excellence, first-rate audio-visual services, and precise logistics, all with the purpose of making your event unforgettable. Whether you're planning a small-scale gathering or a large-scale event, our wealth of knowledge and creative brilliance is at your disposal to bring your idea to life. We handle all of the organizational aspects, allowing you to enjoy your event and create lasting memories. Fusion Event Management is your trusted partner in creating amazing experiences, thanks to our steadfast dedication to excellence and constant desire for innovation. Allow us to make your event fantasies a reality, one precise touch at a time." </p>
                </div>
                
            </div>
            
        </div>
    );
}
 
export default Contact;