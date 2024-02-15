import React, { useState } from 'react';
import '../Styles/Register.css';
import eye from '../images/eye.png';
import closed from '../images/closed.png';
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";


const VisitorSU = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    userName:''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    userName:''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when the user starts typing
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateInputs = () => {
    // Validation logic for each input
    // Set error messages if conditions are not satisfied
    // Leave spaces for you to write each message
    let isValid = true;

    // First Name validation
    // Your message here
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: 'Invalid characters in the first name.',
      }));
      isValid = false;
    }

    // Last Name validation
    // Your message here
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: 'Invalid characters in the last name.',
      }));
      isValid = false;
    }

    // Phone Number validation
    // Your message here
    if (!/^\d{10}$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Phone number must be 10 digits.',
      }));
      isValid = false;
    }

    // Email validation
    // Your message here
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(
        formData.email
      )
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address.',
      }));
      isValid = false;
    }

    // Password validation
    // Your message here
    if (formData.password.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required.',
      }));
      isValid = false;
    }

    // Confirm Password validation
    // Your message here
    if (formData.confirmPassword !== formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match.',
      }));
      isValid = false;
    }

    // All fields are required validation
    // Your message here
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: 'This field is required.',
        }));
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // Send data to the backend endpoint
      // Example: fetch('/api/registration', { method: 'POST', body: formData })
      // console.log('Data submitted:', formData);
    if (validateInputs()) {
      console.log("Data submitted:", formData);

      axios.post(`http://localhost:8080/api/visitor/addVisitor`,formData).then((res)=>{
        if(res.status === 200 || res.status === 201){
          swal("Registered!", "Registration Success!.", "success");
          navigate('/')
        }else{
          swal("Oops!", "Something went wrong!", "error");
        }
      })
    }
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <span className="error-message">{errors.firstName}</span>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span className="error-message">{errors.lastName}</span>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">User Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <span className="error-message">{errors.userName}</span>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <span className="error-message">{errors.phone}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error-message">{errors.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-btn"
          >
            {passwordVisible ? <img src={closed} alt="Eye icon (open)" /> : <img src={eye} alt="Closed eye icon" />}
          </button>
          <span className="error-message">{errors.password}</span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='Re-enter yout password'
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="toggle-btn"
          >
            {confirmPasswordVisible ? <img src={closed} alt="Eye icon (open)" /> : <img src={eye} alt="Closed eye icon" />}
          </button>
          <span className="error-message">{errors.confirmPassword}</span>
        </div>

        <div className="form-group">
          <button type="submit" className='form-btn'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VisitorSU;
