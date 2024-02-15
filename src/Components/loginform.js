import React, { useState } from 'react';
import '../Styles/LoginForm.css';
import Regpop from '../test';
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const LoginForm = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    userType:''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check for non-empty fields
    if (!formData.userName || !formData.password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Validation: Check for a valid email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(formData.email)) {
    //   setErrorMessage('Please enter a valid email address.');
    //   return;
    // }

    if (!formData.userType) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Continue with the login logic if validations pass
    setErrorMessage('');

    const apiEndpoint = 'your-backend-api-endpoint';

    //Visitor
    if(formData.userType == '1'){
      axios.post(`http://localhost:8080/api/visitor/login`,formData).then((res)=>{
        if(res.status === 200){
          localStorage.setItem('ID', res.data.id);
          navigate('/ccc')
        }else if(res.status === 201){
          swal("Oops!", "User Not Approved!", "error");
        }else if(res.status === 203){
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      })
    }

    //Vendor
    if(formData.userType == '2'){
      axios.post(`http://localhost:8080/api/vendor/login`,formData).then((res)=>{
        if(res.status === 200){
          console.log(res)
          localStorage.setItem('ID', res.data.id);
          navigate('/vendor/'+res.data.id)
        }else if(res.status === 201){
          swal("Oops!", "User Not Approved!", "error");
        }else if(res.status === 203){
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      })
    }

    //Event Organizer
    if(formData.userType == '3'){

    }

     //Property Owner
     if(formData.userType == '4'){
      axios.post(`http://localhost:8080/api/propertyOwner/login`,formData).then((res)=>{
        if(res.status === 200){
          console.log(res)
          localStorage.setItem('ID', res.data.id);
          navigate('/createpkg')
        }else if(res.status === 201){
          swal("Oops!", "User Not Approved!", "error");
        }else if(res.status === 203){
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      })
     }

     //Admin
     if(formData.userType == '5'){
      axios.post(`http://localhost:8080/api/admin/login`,formData).then((res)=>{
        if(res.status === 200){
          console.log(res)
          localStorage.setItem('ID', res.data.id);
          navigate('/admin')
        }else if(res.status === 201){
          swal("Oops!", "User Not Approved!", "error");
        }else if(res.status === 203){
          swal("Oops!", "User Name or Password mismatch!", "error");
        }
      })
     }

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful login logic, e.g., redirect to another page
        console.log('Login successful');
      } else {
        // Unsuccessful login logic
        setErrorMessage('Check the login data and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during login.');
    }
  };

  return (
    <div className="login-form-container">
      <h2 style={{
        textAlign:'center'
      }}>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
          <label htmlFor="userType">User Type</label>

          <select
            className="form-select"
            aria-label="Default select example"
            id="userType"
            name="userType"
            onChange={handleInputChange}
          >
            <option defaultValue>Please Select</option>
            <option value="1">Visitor</option>
            <option value="2">Vendor</option>
            <option value="3">Event Organizer</option>
            <option value="4">Property Owner</option>
            <option value="5">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {errorMessage && (
        <div className="error-message">
          <span className='errr'>{errorMessage}</span>
        </div>
      )}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        <div className="rid">
          Don't Have an account?
          <div className='linked-div'>
            <Regpop text="Click Here"/>
          </div>
        </div>

        
      </form>

      
    </div>
  );
};

export default LoginForm;
