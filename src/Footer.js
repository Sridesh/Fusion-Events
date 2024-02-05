import "./Styles/Footer.css"
import Logo from './images/Logo.jpg';
import insta from './images/insta.png';
import fb from './images/fb.png';
import lnk from './images/lnk.png';

const Footer = () => {
    return (
        <div className="footer cont">
            <div className="box">
                <img className="lgim"src={Logo} alt="Logo"/>
            </div>
            <div className="box one">
                <h4>Social Media</h4>
                <div className="container">
                    <div className="ptt"><img className="soc" src={insta} alt="Instagram" /></div>
                    <div className="ptt"><img className="soc" src={fb} alt="Facebook" /></div>
                    <div className="ptt"><img className="soc" src={lnk} alt="LinkedIn" /></div>
                </div>
            </div>
            <div className="box two">
                <h4>Quick Links</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Footer;