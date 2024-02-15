import OrganiserSU from '../Components/OraganiserSU';
import PropownerSU from '../Components/PropownerSU';
import VendorSU from '../Components/VendorSU';
import VisitorSU from '../Components/visitorSU';
import '../Styles/Regpage.css';
import img from '../images/Logo.jpg'
import useState  from 'react';
import { Link, useParams } from 'react-router-dom';



const Register = () => {

const {path} = useParams();
    
//     const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
    return (
        <div className="login row">
            <div className="half photoh">
                <img src={img} alt="" className='loglog'/>
            </div>
            <div className="half formh">
                <h2 style={{
                    textAlign:'center',
                    marginTop:'30px'
                }}>Sign Up as a {path}</h2> 
                <div className="fwrap">

                    
                    {path=="Visitor" && <VisitorSU/>}
                    {path=="Owner" && <PropownerSU/>}
                    {path =="Organiser" && <OrganiserSU/>}
                    {path == "Vendor" && <VendorSU/>}
                    
                </div>
            </div>
        </div>
    );
}
 
export default Register;