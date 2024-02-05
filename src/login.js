import './Styles/login.css';
import img from './images/Logo.jpg'
import useState  from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {

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
                    textAlign:'center'
                }}>Sign In</h2>
                <div className="fwrap">
                    <form>
                        <div className='f-inputs'>
                            <label htmlFor="email">Email Address:</label>
                            <input
                            // type="email"
                            // id="email"
                            // name="email"
                            // value={formData.email}
                            // required
                            />
                        </div>
                        <div className='f-inputs'>
                            <label htmlFor="password">Password:</label>
                            <input
                            // type="password"
                            // id="password"
                            // name="password"
                            // value={formData.password}
                            // required
                            />
                        </div>
                        <div className='btd'>
                            <button type="submit" className='subbtn'>Submit</button>
                        </div>
                        <div className="rid">
                            Don't Have an account? 
                            <Link>
                             Join Here
                            </Link>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
}
 
export default LogIn;